# Biblio IA

Petite bibliothèque open-source de **veille et de fact-checking sur l'IA**, pensée pour être
partagée dans un groupe (WhatsApp) : un lien unique, propre sur mobile, où **chaque affirmation
porte sa source et son niveau de confiance**, et où une fiche se corrige facilement.

> Prototype. On structure les découvertes petit à petit. Nom `biblio-ia` = provisoire, renommable.

## Ce que c'est (et ce que ce n'est pas)

- ✅ Un site statique (généré par **Astro Starlight**) à partir de fichiers **Markdown**.
- ✅ Historique complet et gratuit via **git** (chaque modif est versionnée).
- ✅ Contenu portable : du Markdown pur, jamais verrouillé par l'outil.
- ❌ Pas de PDF, pas de base de données, pas de serveur, pas d'abonnement payant.

## Lancer en local

Prérequis : [Bun](https://bun.sh).

```bash
bun install
bun run dev      # aperçu local sur http://localhost:4321
bun run build    # génère le site dans dist/
```

## Écrire une fiche

- Une fiche = un fichier `.md` dans `src/content/docs/fiches/`. La navigation se met à jour
  **toute seule**.
- Point de départ : [`src/content/docs/modele-fiche.md`](src/content/docs/modele-fiche.md).
- Tu peux ouvrir `src/content/docs` comme un **vault Obsidian** et écrire les fiches comme
  des notes.
- Les 3 règles (sourçage, niveau de confiance, fait ≠ analyse) sont sur la page **Contribuer**.

## Publier (choisir UNE option)

**Option recommandée — Cloudflare Pages (aucun workflow) :**
1. Pousser le dépôt sur GitHub.
2. Sur Cloudflare Pages : *Create a project* → connecter le dépôt.
3. Build command : `bun run build` — Output : `dist`. Déploiement auto à chaque `push`.
4. Laisser `base: '/'` dans `astro.config.mjs`.

**Option alternative — GitHub Pages :**
1. Dans `astro.config.mjs`, mettre `base: '/biblio-ia'` et décommenter `site`.
2. Le workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) publie à chaque `push`.
3. Repo → Settings → Pages → Source = *GitHub Actions*.

Dans les deux cas, remplacer `OWNER` par ton compte GitHub dans `astro.config.mjs` (bouton
« Modifier cette page »).

## Contribuer

Voir la page **Contribuer** du site. En prototype : passe tes trouvailles à Marc (lien +
contexte), il crée/complète la fiche. L'édition web pour tout le monde pourra être ajoutée
plus tard **sans rien réécrire**.

## Licence

- **Contenu** (les fiches) : [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.fr).
- **Code** (config du site) : MIT.
