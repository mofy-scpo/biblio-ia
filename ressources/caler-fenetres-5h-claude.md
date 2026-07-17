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

## Notre note

🔵 Utile si l'on est **gros utilisateur** de Claude et qu'on a une machine toujours allumée ;
inutile pour un usage occasionnel. Deux limites : sans supervision, un **silence ne prouve pas** que
ça a tourné (on peut brancher une alerte *en cas d'échec seulement*, pour ne pas se spammer) ; et
comme tout repose sur un comportement **non garanti** par Anthropic, c'est **à re-tester** si les
règles d'usage changent. Le repli `|| claude -p "ping"` évite que ça casse le jour où l'alias
`haiku` disparaîtrait.

## Historique

- **2026-07-17** — Ajout (méthode maison ; script générique ; sans lien externe).
