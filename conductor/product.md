# Product — Biblio IA

## Vision

Une **bibliothèque partagée de veille et de fact-checking sur l'IA**, née pour le groupe WhatsApp
de potes qui s'échangent des vidéos et affirmations sur l'IA. L'**antidote** au « une IA a dit
que… » : chaque affirmation porte sa **source** et son **niveau de confiance**, et se corrige en
un clic. Lisible sur mobile, historique gratuit, zéro friction.

## Le use case (clair et limpide)

> **En 3 étapes.**
> 1. **Quelqu'un partage** une vidéo / une affirmation IA dans le groupe (« la Chine ferme son IA open source ! »).
> 2. **On ouvre ou on crée une fiche** : chaque affirmation y est **sourcée** (lien primaire vérifié)
>    et **taguée** (✅ confirmé · 🟡 probable · 🟠 rumeur · 🔵 spéculation · ⛔ à vérifier), le **fait**
>    séparé de l'**analyse**.
> 3. **On partage le lien de la fiche** dans le groupe. Réponse sourcée, lisible, corrigeable.

Une fiche répond à **une question** (« Est-ce la fin de l'IA open source chinoise ? ») et permet à
n'importe qui de voir, d'un coup d'œil : ce qui est acté, ce qui est en débat, ce qui est faux.

## Utilisateurs cibles

- **Primaire** : les membres du groupe WhatsApp (curieux d'IA, pas forcément experts).
- **Secondaire** : toute personne tombant sur le repo — réutilisable sous **CC BY-NC 4.0** (crédit + non commercial).
- **Contributeur** : au départ Marc (curation) ; l'édition web s'ouvrira plus tard **sans réécriture**
  (tout est Markdown versionné).

## Ce que ça n'est pas (non-goals)

- Pas un blog ni un média : des **fiches-réponses**, pas des articles d'opinion.
- Pas un CMS, pas de base de données, pas d'authentification.
- Pas un framework / build applicatif — **Markdown plat**, volontairement minimal (Astro retiré
  comme *overkill*). La structure prématurée est le coût, pas la sécurité.

## Mesure de succès

- Une fiche partagée dans le groupe **coupe court** à une désinfo en fournissant des sources.
- Chaque fiche publiée respecte la règle d'or : **aucun fait non vérifié présenté comme acté**.
- **Zéro lien mort** dans les fiches diffusées.
