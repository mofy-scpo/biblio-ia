# Product Guidelines — Biblio IA

Ce sont ces règles qui font la différence avec un copier-coller de chatbot. Elles complètent le
`README.md` (règles publiques) ; ici on ajoute les conventions internes de rigueur et d'UX.

## Règles éditoriales (les fondamentaux)

1. **Chaque affirmation est sourcée ou marquée.** Un lien vers une source. Pas de source ?
   → tag `⛔ à vérifier`, on ne diffuse pas comme un fait.
2. **Niveau de confiance explicite** : ✅ confirmé · 🟡 probable · 🟠 rumeur · 🔵 spéculation · ⛔ à vérifier.
3. **Fait ≠ analyse.** Ce qui *est* (fait sourcé) séparé de ce qu'*on en pense* (🔵). Rien d'acté → **conditionnel**.
4. **Règle d'or** : dans le doute, **descendre d'un cran**.

## Rigueur des sources (nouveau — issu du fact-check Chine)

- **Distinguer source primaire et presse.** Une **source primaire** = le document original / l'acteur
  (texte officiel, communiqué, papier de recherche). La **presse** qui rapporte des sources anonymes
  (Reuters, etc.) est fiable mais **secondaire** — ne pas l'étiqueter « source primaire ». Pour une
  biblio dont l'argument est la rigueur, mal nommer la nature d'une source est l'erreur la plus coûteuse.
- **Reprise ≠ corroboration.** Deux médias qui relaient la même dépêche ne « confirment » pas
  indépendamment. Ne pas gonfler la confiance par des reprises ; le signaler (« reprise de X »).
- **Un fait de demain reste une prévision aujourd'hui.** Un événement daté dans le futur se tague
  `⛔ à venir` sur l'événement, même si l'**annonce**, elle, est ✅.
- **Réflexe anti-hallucination** : avant d'écrire « source : X », **ouvrir le lien** (il existe ? il
  dit bien ça ?), **attribuer au bon média**, **dater**. Un lien inventé est une faute grave.

## Style de prose

- **Français, avec accents** (é, è, à, ù, ç…). Toujours.
- Clair et direct, sans jargon inutile ; **définir les acronymes** à leur première occurrence
  (MOFCOM, NDRC, NPU…).
- Titres de fiches = **une question**. Réponse courte en tête (TL;DR), taguée 🔵 si c'est une analyse.

## UX du site (GitHub + GitHub Pages)

- **Mobile-first** : la fiche doit être lisible sur téléphone (c'est là qu'elle est partagée).
- **Le use case en tête de home** : « Comment ça marche, en 3 étapes » visible immédiatement.
- **Navigation simple** : liste des fiches → fiche. Pas de menu complexe, pas de fioritures.
- **Pas de dépendance lourde** : le rendu passe par Jekyll intégré à GitHub Pages (`_config.yml`),
  sans build local ni node_modules.
