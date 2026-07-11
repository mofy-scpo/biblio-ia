# Spec — Refonte UX du site (just-the-docs)

## Problème

Le site Pages rend le `README.md` en un seul long scroll : les **fiches** (le cœur) sont une petite
puce noyée, les **règles** occupent l'essentiel de la page, et il n'y a ni vraie page d'accueil ni
navigation. Le README fait double emploi (doc du dépôt + home du site).

## Objectif

Un site clair et ergonomique — « la norme » d'une base de connaissance — **sans build local** :
thème documentaire **just-the-docs** (nav latérale + recherche), et contenu **éclaté en pages**.

## Décision (Marc)

Option A : **just-the-docs** via `remote_theme` (épinglé `@v0.12.0`), plugin `jekyll-remote-theme`
(whitelisté GitHub Pages). Aucun `node_modules`, aucun build : GitHub compile côté serveur, les
fiches restent du Markdown éditable au bouton crayon.

## Structure cible

- **Accueil** (`index.md`) — ce que c'est + « en 3 étapes » + accès direct aux fiches.
- **Fiches** (`fiches.md`, parent) — index des fiches (grandit) ; chaque fiche = page enfant.
- **Règles** (`regles.md`) — déplacées hors de la home.
- **Modèle de fiche** (`MODELE.md`) — page contributeur.
- `README.md` — allégé, tourné vers le dépôt + lien vers le site ; **exclu** du build du site.

## Critères d'acceptation

- [ ] Le site a une **nav latérale** (Accueil / Fiches / Règles / Modèle) et une **recherche**.
- [ ] Les **fiches** sont visibles au premier niveau ; la fiche Chine s'ouvre en page enfant.
- [ ] Les **règles** ont leur page dédiée (plus sur la home).
- [ ] La **home** présente le pitch + les 3 étapes + un accès clair aux fiches.
- [ ] Le build **Pages réussit** (thème appliqué en live, aucune erreur).
- [ ] `conductor/`, `tools/`, `README.md` **exclus** du site (pas de pages parasites).
- [ ] Le vérificateur de liens reste **vert** (8/8).
- [ ] Aucun build local / `node_modules` introduit ; fiches toujours en Markdown.

## Hors périmètre

- CSS sur-mesure poussée / couleurs de marque (on part du thème par défaut, à peaufiner après retour visuel de Marc).
- Nouvelles fiches.
