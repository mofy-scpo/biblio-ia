# Biblio IA

Petite bibliothèque partagée de **veille et de fact-checking sur l'IA** (pour notre groupe).
Des fiches en Markdown, où **chaque affirmation porte sa source et son niveau de confiance** —
l'antidote au « une IA a dit que… ». Un simple dépôt : lisible sur mobile, historique gratuit,
correction en un clic.

> Prototype. On structure nos découvertes petit à petit. Nom `biblio-ia` = provisoire.

## Les fiches

- [La « fin » de l'IA open source chinoise ?](fiches/ia-open-source-chinoise-2026.md) — *vérifiée, sources citées* — 2026-07-11

## Les règles de la biblio

Ce sont elles qui font la différence avec un copier-coller de chatbot.

**1. Chaque affirmation est sourcée ou marquée.** Un lien vers la source. On **distingue la
source primaire** (le document ou l'acteur d'origine : texte officiel, communiqué, papier de
recherche) **de la presse** qui la rapporte — fiable, mais *secondaire* : on ne l'étiquette pas
« source primaire ». Pas de source ? On tague `⛔ à vérifier` — on ne diffuse pas un fait non vérifié.

**2. On note le niveau de confiance :**

| Tag | Sens |
|-----|------|
| ✅ **confirmé** | Sourcé par au moins une source fiable et vérifiée (idéalement primaire). |
| 🟡 **probable** | Plusieurs sources secondaires concordantes, aucun démenti. |
| 🟠 **rumeur** | Rapporté, mais non confirmé officiellement. |
| 🔵 **spéculation** | Analyse ou opinion — pas un fait. |
| ⛔ **à vérifier** | Pas encore sourcé. **Ne pas diffuser comme un fait.** |

**3. On distingue le fait de l'analyse.** Ce qui *est* (fait sourcé) et ce qu'*on en pense*
(analyse, 🔵). Si rien n'est acté, on écrit au **conditionnel**.

> **Règle d'or :** dans le doute, on descend d'un cran. Mieux vaut « la Chine *envisagerait* »
> et vrai, que « la Chine *a décidé* » et faux.

### Le réflexe anti-hallucination

Les LLM inventent parfois des sources plausibles. Avant d'écrire « source : X » : **ouvre le
lien** (il existe ? il dit bien ça ?), **attribue au bon média**, **date-le**.

- **Reprise ≠ corroboration** : deux médias qui relaient la même dépêche ne se « confirment » pas
  l'un l'autre. On ne gonfle pas la confiance avec des reprises — on le signale (« reprise de X »).
- **Un fait de demain reste une prévision** : un événement daté dans le futur se tague `⛔ à venir`
  sur l'événement lui-même — même si l'*annonce*, elle, est déjà ✅ confirmée.

## Ajouter ou corriger une fiche

- **Ajouter** : créer un fichier `.md` dans `fiches/` (voir [`MODELE.md`](MODELE.md)) et
  l'ajouter à la liste ci-dessus. Sur GitHub : bouton **Add file → Create new file**.
- **Corriger** : ouvrir la fiche sur GitHub → bouton crayon **✏️ Edit** → modifier → *Commit*.
  Aucune commande git, juste un compte GitHub gratuit.

## Licence

Contenu sous [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.fr) *(réutilisable
avec attribution)*.

---

*Envie du rendu « site web » un jour ? GitHub Pages (Jekyll intégré) = un fichier `_config.yml`,
sans build ni dépendances. À faire seulement si le proto prend.*
