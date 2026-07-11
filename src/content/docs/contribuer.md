---
title: Contribuer
description: Comment ajouter ou corriger une fiche, et les 3 règles de la biblio.
---

Cette biblio se construit **petit à petit**. Pour l'instant elle est en prototype : Marc
curate les fiches à partir de ce que le groupe envoie. Contribuer reste volontairement simple —
pas besoin d'être développeur.

## Ajouter ou corriger une fiche

Une fiche est **un simple fichier Markdown** dans `src/content/docs/fiches/`.

- **Ajouter** : déposer un nouveau fichier `.md` dans ce dossier (voir le
  [Modèle de fiche](/modele-fiche/)). La navigation de gauche se met à jour **toute seule** —
  rien d'autre à configurer.
- **Corriger** : en bas de chaque fiche, le lien **« Modifier cette page »** ouvre l'éditeur
  web GitHub (compte GitHub gratuit). On corrige dans le navigateur, sans aucune commande git.
- **Écrire dans Obsidian** : le dossier `src/content/docs` est ouvrable comme un
  *vault* Obsidian. On écrit les fiches comme des notes ; le site les publie.

:::note[Prototype]
Tant qu'on prototype, le plus simple est de **passer les trouvailles à Marc** (lien + contexte)
et il crée/complète la fiche. Si l'usage prend, on ouvrira une vraie édition web pour tout le
monde — sans rien réécrire, puisque tout est déjà du Markdown versionné.
:::

## Les 3 règles de la biblio

Ce sont elles qui font la différence avec « ce qu'a répondu un chatbot ».

1. **Chaque affirmation est sourcée ou marquée.** Un lien vers une source primaire (article,
   communiqué, papier). Pas de source sous la main ? On tague `⛔ à vérifier` — on ne diffuse
   pas un fait non vérifié.
2. **On note le niveau de confiance** (✅ confirmé / 🟡 probable / 🟠 rumeur / 🔵 spéculation /
   ⛔ à vérifier). Dans le doute, on descend d'un cran.
3. **On distingue le fait de l'analyse.** Ce qui *est* (fait sourcé) et ce qu'*on en pense*
   (analyse, tagguée 🔵). Si rien n'est acté, on écrit au **conditionnel**.

## Vérifier une source (le réflexe anti-hallucination)

Les LLM inventent parfois des sources plausibles (une référence, un média mal attribué). Avant
d'écrire « source : X » :

- **Ouvre le lien.** Il existe vraiment ? Il dit bien ce qu'on lui fait dire ?
- **Attribue au bon média.** Une dépêche Reuters reste Reuters, pas « repris par un agrégateur ».
- **Date-la.** Un « fait » de demain reste une prévision aujourd'hui.

## Licence

Contenu sous **[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.fr)**
*(réutilisable librement avec attribution)*. Le peu de code (config du site) est sous licence MIT.
