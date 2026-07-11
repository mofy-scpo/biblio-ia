<!-- Adapté du template Conductor (Apache-2.0). Version **contenu** : les portes TDD / couverture
de code du défaut sont remplacées par des portes fact-check + liens, adaptées à un repo de fiches. -->

# Project Workflow — Biblio IA (adapté contenu)

## Principes directeurs

1. **Le plan est la source de vérité.** Tout travail est suivi dans `plan.md`.
2. **Rigueur avant diffusion.** Aucune affirmation publiée sans source + tag de confiance.
3. **Aucun lien mort.** Toute URL d'une fiche doit résoudre (HTTP 200) avant diffusion.
4. **Fait ≠ analyse.** Conditionnel là où rien n'est acté.
5. **Simplicité.** Markdown plat par défaut ; outillage (bun/TS) seulement si le besoin est prouvé.

> **Note d'adaptation** : ce projet est une bibliothèque de **contenu**, sans code applicatif. Le
> TDD, la couverture ≥80 % et les tests unitaires du workflow Conductor standard **ne s'appliquent
> pas** aux fiches. Ils ne s'appliquent qu'aux rares utilitaires bun/TS (ex. vérificateur de liens),
> et de façon proportionnée.

## Cycle de vie d'une tâche

1. **Sélectionner** la prochaine tâche `[ ]` de `plan.md`, dans l'ordre.
2. **Marquer en cours** : `[ ]` → `[~]`.
3. **Réaliser la tâche** :
   - **Contenu (fiche / règle / modèle)** : rédiger ; sourcer chaque affirmation ; ouvrir et vérifier
     chaque lien ; taguer la confiance ; séparer fait/analyse.
   - **Outil (bun/TS)** : implémenter simplement ; un test léger si la logique le justifie (pas de
     dogme de couverture).
4. **Portes qualité** (voir ci-dessous) : vérifier avant de clore.
5. **Commit** (un par tâche) avec message conventionnel (voir Conventions).
6. **Mettre à jour le plan** : `[~]` → `[x]` + 7 premiers caractères du SHA du commit.
7. **Commit du plan** : `conductor(plan): Mark task '<nom>' as complete`.

## Portes qualité (Definition of Done)

Avant de clore une tâche, vérifier :

- [ ] **Contenu** : chaque affirmation a une **source** OU un tag `⛔/🟠/🔵` explicite.
- [ ] **Liens** : toutes les URLs concernées **résolvent** (HTTP 200) — via `tools/check-links.ts` quand il existe.
- [ ] **Rigueur** : source primaire vs presse correctement qualifiée ; reprises signalées ; pas de fait non acté présenté comme ✅.
- [ ] **Forme** : français **avec accents** ; acronymes définis ; fait/analyse séparés.
- [ ] **Mobile** : la fiche / la page reste lisible sur téléphone.
- [ ] **Outil** (le cas échéant) : types TS corrects, pas d'erreur d'exécution, comportement vérifié.
- [ ] **Simplicité** : aucune machinerie ajoutée sans besoin prouvé (pas de PDF/HTML/build parasite).

## Vérification de fin de phase (checkpoint)

À la fin d'une phase de `plan.md` :

1. Annoncer la fin de phase.
2. Lancer le **vérificateur de liens** sur les fiches touchées (si l'outil existe) ; sinon, contrôle manuel des liens.
3. Proposer un **plan de vérification manuelle** court (ex. « ouvrir la fiche sur mobile, confirmer
   que les 3 étapes du use case sont visibles »).
4. **Attendre le OK explicite** de l'utilisateur.
5. **Commit de checkpoint** : `conductor(checkpoint): Checkpoint end of Phase X`.
6. Enregistrer le SHA du checkpoint dans `plan.md` (`[checkpoint: <sha>]`).

## Conventions de commit

Format `<type>(<scope>): <description>`. Types utiles ici : `docs` (fiches, règles, modèle),
`feat`/`fix`/`chore` (outillage, config), `style` (mise en forme Pages).

- Setup Conductor : `conductor(setup): Add conductor setup files`
- Tâche complétée : `conductor(plan): Mark task '<nom>' as complete`
- Nouvelle fiche : `docs(fiches): Ajouter la fiche '<sujet>'`
- Outil liens : `feat(tools): Vérificateur de liens des fiches`

## Amélioration continue

- Garder le repo **simple et lisible**. Réviser le workflow si une porte coûte plus qu'elle ne rapporte.
