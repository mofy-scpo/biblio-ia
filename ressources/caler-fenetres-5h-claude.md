---
title: Caler ses fenêtres de 5 h de Claude — Marc O'Flaherty
parent: Ressources
nav_order: 2
date: 2026-07-17
---

# Caler ses fenêtres de 5 h de Claude — Marc O'Flaherty

> 🔵 **Ressource (méthode / astuce).** Méthode que j'ai mise en place et que je partage telle
> quelle. Le mécanisme d'abonnement sous-jacent n'est **pas documenté officiellement** par Anthropic
> et peut évoluer — astuce datée, à re-tester si le comportement change.

| | |
|---|---|
| **Type** | Astuce / automatisation (cron) |
| **Auteur** | Marc O'Flaherty |
| **Source** | Méthode maison — pas de source externe |
| **Sujet** | Rendre prévisibles ses blocs d'usage de 5 h de l'abonnement Claude |

## En bref

L'abonnement Claude fonctionne par **fenêtres glissantes de 5 heures**. Une fenêtre ne démarre pas
à minuit : elle démarre **au premier message** que l'on envoie. Du coup, si ce premier message
tombe à une heure différente chaque jour, les blocs d'usage sont désalignés et imprévisibles.

L'idée : **déclencher automatiquement un message minuscule à heure fixe** (ici 6 h du matin) pour
« ancrer » la fenêtre. Les blocs deviennent alors prévisibles :

- Bloc 1 : 6 h → 11 h
- Bloc 2 : 11 h → 16 h
- Bloc 3 : 16 h → 21 h
- Bloc 4 : 21 h → 2 h

⚠️ **Ce que ça fait — et ce que ça ne fait pas.** Ça *aligne* les fenêtres sur un horaire choisi.
Ça **n'augmente pas le quota** : c'est du *timing*, pas du volume.

## Prérequis

Une machine **allumée à l'heure du déclenchement**, avec le CLI **`claude` installé et connecté** :
un **VPS**, un **ordinateur qui ne s'éteint pas**, ou — **la solution que j'utilise** — un
**serveur maison** avec son Claude authentifié. Sur un laptop éteint la nuit, rien ne se déclenche.

## La méthode

Un petit script, appelé par `cron` chaque matin :

```bash
#!/usr/bin/env bash
set -uo pipefail
export PATH="$HOME/.local/bin:/usr/local/bin:/usr/bin:/bin"   # cron démarre avec un PATH minimal
# Haiku (le modèle le moins coûteux) si l'alias existe, sinon le modèle par défaut.
# </dev/null : en mode -p, le CLI ne peut jamais rester bloqué à attendre une saisie.
claude -p "ping" --model haiku </dev/null || claude -p "ping" </dev/null
```

**Le piège du fuseau horaire.** Beaucoup de serveurs sont à l'heure **UTC** : un naïf
`0 6 * * *` s'y déclenche à 6 h UTC (= 8 h à Paris l'été). Deux cas :

- Si ton `cron` gère `CRON_TZ` (cronie — RHEL, Fedora, Arch) : ajoute `CRON_TZ=Europe/Paris`
  juste au-dessus de la ligne, et garde `0 6 * * *`.
- Si ton `cron` **ignore** `CRON_TZ` (celui de Debian/Ubuntu, très répandu) : déclenche large en
  UTC et laisse le **script vérifier l'heure locale**. Ajoute en tête de script
  `[ "$(TZ=Europe/Paris date +%H)" = 06 ] || exit 0`, puis programme `0 4,5 * * *` — 4 h UTC vaut
  6 h Paris l'été, 5 h UTC vaut 6 h Paris l'hiver : un seul des deux passe la garde (calage
  automatique été/hiver).

## Aller plus loin : vérifier au lieu de deviner

Faiblesse de la version ci-dessus : si le ping tombe **juste avant** la fin de la fenêtre en cours,
il compte pour l'ancienne fenêtre (encore ouverte) et **ne démarre rien**. Et comme `claude` renvoie
« succès », l'échec est **silencieux** — le pire cas.

La parade : après le ping, **relire l'heure de reset de la fenêtre 5 h** et confirmer qu'elle a bien
sauté à ~5 h dans le futur. Cette donnée est exposée par l'endpoint d'usage de Claude
(`api.anthropic.com/api/oauth/usage`, champ `five_hour.resets_at` — la même valeur que le « resets… »
de la status line). En epoch, la comparaison est triviale et **indépendante du fuseau** :

```bash
# $USAGE = endpoint d'usage OAuth (api.anthropic.com/api/oauth/usage) ; $TOKEN = jeton OAuth du CLI
resets_at=$(curl -s -H "Authorization: Bearer $TOKEN" "$USAGE" | jq -r .five_hour.resets_at)
delta=$(( $(date -d "$resets_at" +%s) - $(date +%s) ))   # secondes avant le reset
```

La logique devient **pilotée par l'état**, plus par l'horloge :

- fenêtre encore bien ouverte (`delta` > ~15 min) → **rien à faire** (impossible d'en forcer une
  neuve sans tuer celle qui tourne) ;
- elle expire bientôt / est expirée → **attendre l'expiration, pinguer, puis relire `delta`** ; si
  ≈ 5 h → confirmé, sinon on réessaie quelques fois.

Principe qui tranche : **pencher tard plutôt que tôt** — trop tôt = raté silencieux ; trop tard =
quelques minutes perdues en début de bloc.

## Notre note

🔵 Utile si l'on est **gros utilisateur** de Claude et qu'on a une machine toujours allumée ;
inutile pour un usage occasionnel. La version *vérifiée* ci-dessus règle le piège du « silence ne
prouve rien » : on ne branche une alerte **que si la fenêtre n'a pas pu être confirmée**, donc pas de
spam. Restent deux limites honnêtes : tout repose sur un comportement **non garanti** par Anthropic
(à re-tester si les règles changent), et une fenêtre déjà ouverte **ne se réaligne pas de force** (on
ne tue pas une fenêtre en cours). Le repli `|| claude -p "ping"` évite que ça casse le jour où
l'alias `haiku` disparaîtrait.

## Historique

- **2026-07-17** — Ajout (méthode maison ; script générique ; sans lien externe).
- **2026-07-18** — Ajout de la version *vérifiée* : lecture de `resets_at` pour confirmer l'ancrage (logique pilotée par l'état, plus par l'horloge devinée).
