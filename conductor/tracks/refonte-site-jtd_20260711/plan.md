# Plan — Refonte UX du site (just-the-docs)

Statut : `[ ]` à faire · `[~]` en cours · `[x]` fait (+ SHA). Workflow adapté contenu.

## Phase 1 — Thème & configuration

- [x] **1.1** Réécrire `_config.yml` : `remote_theme: just-the-docs/just-the-docs@v0.12.0`,
  `plugins: [jekyll-remote-theme]`, `search_enabled`, `aux_links`, `exclude` (conductor//tools//README). `a6d7086`

## Phase 2 — Pages & structure de navigation

- [x] **2.1** `index.md` (Accueil) : pitch + « en 3 étapes » + boutons vers Fiches/Règles. `a6d7086`
- [x] **2.2** `fiches.md` (Fiches, `has_children`) : index des fiches. `a6d7086`
- [x] **2.3** `regles.md` (Règles) : règles déplacées hors de la home. `a6d7086`
- [x] **2.4** `MODELE.md` : front-matter (Modèle de fiche). `a6d7086`
- [x] **2.5** fiche Chine : front-matter (`parent: Fiches`). `a6d7086`
- [x] **2.6** `README.md` allégé (dépôt + lien site + contribution). `a6d7086`
- [x] **2.7** `MODELE.md` : bloc front-matter à copier + « ajouter à fiches.md ». `a6d7086`

## Phase 3 — Vérification live

- [x] **3.1** `bun tools/check-links.ts` → vert (front-matter ne casse pas les liens).
- [x] **3.2** Build Pages **réussi** avec le thème (aucune erreur ; vérifié en live).
- [x] **3.3** Live : nav latérale + recherche présentes, home OK, fiche en page enfant, `conductor/` exclu (404).
- [x] **3.3b** **Fix 404 au clic** : les liens en page (`{% link %}`) sortaient sans `/biblio-ia` →
  passés en `relative_url`, `url`+`baseurl` fixés dans `_config.yml`. Vérifié live (href = `/biblio-ia/…`). `9925157`
- [x] **3.4 (checkpoint)** OK visuel de Marc reçu (« c'est bon »). Track clos.

## Phase 4 — Polish visuel (à la demande de Marc)

- [x] **4.1** Surcouche de style dans `_sass/custom/custom.scss` : accent bleu encre `#2743a6`,
  callouts (blockquotes), en-têtes de tableaux + zébrures, fiches en cartes ; emoji 📚 dans l'en-tête. `8c3ceaf`
- [x] **4.2** Rollback garanti : tag `site-sobre-v1` (état sobre) + tout le style isolé dans un seul fichier.
- [x] **4.3** Vérifié live : accent compilé dans le CSS, cartes + emoji rendus, link-checker vert.

## Notes

- La grille de fiches grandit via le front-matter (`parent: Fiches`) : chaque nouvelle fiche apparaît
  automatiquement dans la nav latérale sous « Fiches ».
- L'API `builds/latest` de GitHub Pages laggue sur le champ `commit` : vérifier le rendu via le **contenu live**, pas l'API.
