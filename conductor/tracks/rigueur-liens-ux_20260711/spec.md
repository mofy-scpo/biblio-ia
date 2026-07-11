# Spec — Rigueur, vérif liens, UX Pages

## Contexte

La première fiche (« La fin de l'IA open source chinoise ? ») vient d'être fact-checkée et publiée.
Le fact-check a fait émerger des apprentissages de **rigueur** (distinction source primaire / presse,
reprise ≠ corroboration, événement futur ≠ fait) qui doivent devenir des **règles** du repo, et un
besoin d'**outillage** (vérifier automatiquement que les liens des fiches résolvent). En parallèle,
le site GitHub Pages doit exposer un **use case clair et limpide** et être agréable sur mobile.

## Objectifs

1. **Rigueur & modèle** — Intégrer aux règles publiques la distinction source primaire vs presse et
   « reprise ≠ corroboration » ; mettre à jour `MODELE.md` avec la structure enrichie éprouvée sur la
   fiche Chine (tableau confiance par ligne, section « faits liés mais hors-sujet », Sources vérifiées).
2. **Vérif liens auto** — Un script `tools/check-links.ts` (bun/TS) qui extrait les URLs de `fiches/*.md`
   et teste qu'elles résolvent (HTTP 200) ; rapport clair ; code de sortie non nul si lien mort.
   Option : GitHub Action déclenchée sur PR.
3. **UX site Pages & use case** — La home (rendu Pages) présente le **use case en 3 étapes** dès le
   haut ; navigation simple vers les fiches ; rendu **mobile** vérifié.

## Périmètre

**Inclus** : édition de `README.md`, `MODELE.md` ; création de `tools/check-links.ts` (+ éventuelle
Action) ; ajustements `_config.yml` / page d'accueil pour l'UX Pages ; vérification du rendu.

**Exclus** : nouvelles fiches de fond ; CMS / édition web ; framework de site à build ; génération PDF.

## Critères d'acceptation

- [ ] Les règles publiques distinguent explicitement **source primaire** (doc/acteur original) et
      **presse/reprise**, avec la consigne « ne pas gonfler la confiance ».
- [ ] `MODELE.md` reflète la structure enrichie (tags ligne à ligne, section hors-sujet, Sources vérifiées).
- [ ] `bun tools/check-links.ts` liste chaque URL des fiches avec son statut et **échoue** (exit ≠ 0)
      s'il existe un lien mort.
- [ ] Le vérificateur passe **au vert** sur les fiches actuelles.
- [ ] La home du site Pages montre le **use case en 3 étapes** en tête et reste lisible sur mobile
      (vérifié par capture).
- [ ] Le repo reste **Markdown plat** : aucun framework/build applicatif ajouté ; l'outillage se limite
      à un script bun/TS + config optionnelle.

## Risques / notes

- Certaines URLs (Reuters direct, CNN, CNBC) renvoient 403/451 aux robots : le vérificateur doit
  distinguer « injoignable par le robot » de « lien mort », et ne pas produire de faux négatifs
  (UA navigateur, suivre les redirections, tolérer une liste d'hôtes connus pour bloquer).
- Ne pas transformer le proto en usine : GitHub Action = **option**, pas obligation.
