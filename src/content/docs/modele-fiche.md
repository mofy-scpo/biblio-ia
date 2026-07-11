---
title: Modèle de fiche
description: Gabarit à copier pour créer une nouvelle fiche.
---

Copie le bloc ci-dessous dans un nouveau fichier `src/content/docs/fiches/mon-sujet.md`
(nom en minuscules-avec-tirets), puis remplace le contenu entre crochets.

````markdown
---
title: [Titre court de la fiche]
description: [Une phrase résumant le sujet]
---

:::caution[⚠️ Brouillon — à vérifier avant diffusion]
Les faits ci-dessous ne sont pas encore tous sourcés. Retire cet encadré quand la fiche est solide.
:::

## La question
[La question à laquelle la fiche répond, en une ligne.]

## Réponse courte
[TL;DR en 2-3 phrases. Taguer 🔵 si c'est une analyse.]

## Ce qui est avancé (et notre degré de confiance)
| Affirmation | Confiance | Source |
|---|---|---|
| [affirmation 1] | ✅ confirmé | [lien] |
| [affirmation 2] | ⛔ à vérifier | [à sourcer] |

## Analyse
[Ce qu'on en pense — bien séparé des faits. Tag 🔵.]

## Sources
- [Liste des sources primaires, une par ligne.]

## Historique
- [AAAA-MM-JJ] — [ce qui a changé]
````

:::tip
Niveaux de confiance : ✅ confirmé · 🟡 probable · 🟠 rumeur · 🔵 spéculation · ⛔ à vérifier.
Encadrés disponibles : `:::note`, `:::tip`, `:::caution`, `:::danger`.
:::
