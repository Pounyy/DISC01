# DISC01

Site personnel sur le jeu vidéo, construit avec Astro. Les articles et fiches de jeux sont des fichiers Markdown dans `src/content/blog` et `src/content/jeux`.

## Développement

Node.js 24 est recommandé.

```sh
npm install
npm run dev
npm run check
npm run build
```

## Contenu et administration

L'interface Sveltia CMS est disponible à `/DISC01/admin/` après publication. Elle écrit directement les fichiers Markdown et les images dans le dépôt GitHub. Le slug est choisi à la création et sert de nom de fichier et d'URL. Un article avec `draft: true` n'apparaît pas sur le site publié. Les contenus peuvent aussi être édités sans CMS, avec un éditeur de texte.

Pour se connecter, utiliser un jeton GitHub à accès restreint au dépôt `Pounyy/DISC01` avec la permission **Contents: Read and write**. Ne jamais placer ce jeton dans le dépôt. L'interface utilise le script Sveltia hébergé sur un CDN ; le site public n'en dépend pas.

## Publication

Dans les paramètres GitHub du dépôt, activer **Pages → Source: GitHub Actions**. Un push sur `main` déclenche le build puis la publication à `https://pounyy.github.io/DISC01/`.

Lors d'un futur passage à un domaine personnalisé, modifier `site` et retirer `base` dans `astro.config.mjs`, puis adapter `public_folder` dans `public/admin/config.yml`. Le contenu Markdown et les images restent dans le dépôt.
