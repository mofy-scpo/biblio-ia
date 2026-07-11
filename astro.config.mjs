// @ts-check
import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

// Biblio IA — configuration Astro + Starlight.
//
// `base` = chemin racine du site.
//   - '/'            → dev local, domaine perso, ou Cloudflare Pages (recommandé)
//   - '/biblio-ia'   → GitHub Pages « de projet » (décommente aussi `site` ci-dessous)
export default defineConfig({
  // site: 'https://OWNER.github.io',
  base: '/',
  integrations: [
    starlight({
      title: 'Biblio IA',
      description: 'Veille IA du groupe, sourcée et corrigeable.',
      // Site monolingue en français.
      locales: { root: { label: 'Français', lang: 'fr' } },
      // Bouton « Modifier cette page » → éditeur web GitHub.
      // ⚠️ Remplace OWNER par ton compte/orga GitHub après avoir créé le dépôt.
      editLink: { baseUrl: 'https://github.com/OWNER/biblio-ia/edit/main/' },
      // La rubrique « Fiches » se remplit TOUTE SEULE depuis le dossier :
      // ajouter une fiche = déposer un .md dans src/content/docs/fiches/ — aucun réglage.
      sidebar: [
        { label: 'Accueil', link: '/' },
        { label: 'Fiches', autogenerate: { directory: 'fiches' } },
        { label: 'Contribuer', link: '/contribuer/' },
        { label: 'Modèle de fiche', link: '/modele-fiche/' },
      ],
      // Recherche (Pagefind) intégrée — aucun service externe, aucune clé.
    }),
  ],
})
