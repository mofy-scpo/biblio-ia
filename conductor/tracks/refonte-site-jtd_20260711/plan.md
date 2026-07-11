# Plan — Refonte UX du site (just-the-docs)

Statut : `[ ]` à faire · `[~]` en cours · `[x]` fait (+ SHA). Workflow adapté contenu.

## Phase 1 — Thème & configuration

- [ ] **1.1** Réécrire `_config.yml` : `remote_theme: just-the-docs/just-the-docs@v0.12.0`,
  `plugins: [jekyll-remote-theme]`, `search_enabled: true`, `aux_links` (dépôt GitHub),
  `exclude: [conductor/, tools/, README.md, .gitignore, public/]`.

## Phase 2 — Pages & structure de navigation

- [ ] **2.1** `index.md` (Accueil, `nav_order: 1`) : pitch + « en 3 étapes » + accès aux fiches.
- [ ] **2.2** `fiches.md` (Fiches, `nav_order: 2`, `has_children: true`) : intro + liste des fiches.
- [ ] **2.3** `regles.md` (Règles, `nav_order: 3`) : règles + tags + réflexe anti-hallucination (déplacés du README).
- [ ] **2.4** `MODELE.md` : ajouter front-matter (Modèle de fiche, `nav_order: 4`).
- [ ] **2.5** `fiches/ia-open-source-chinoise-2026.md` : ajouter front-matter (`parent: Fiches`, `title`, `nav_order: 1`).
- [ ] **2.6** Alléger `README.md` (dépôt : pitch + lien site + contribution) ; il reste exclu du site.
- [ ] **2.7** Mettre à jour `MODELE.md` : bloc front-matter à copier pour toute nouvelle fiche + « ajouter à fiches.md ».

## Phase 3 — Vérification live

- [ ] **3.1** `bun tools/check-links.ts` → vert (front-matter ne casse pas les liens).
- [ ] **3.2** Push ; attendre le build Pages ; vérifier qu'il **réussit avec le thème** (pas d'erreur).
- [ ] **3.3** Vérifier en live : nav latérale + recherche présentes, home OK, fiche accessible, `conductor/` absent du site.
- [ ] **3.4 (checkpoint)** Récap + **OK visuel de Marc** (goût) avant de clore / peaufiner les couleurs.
