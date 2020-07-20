<div align="center">
  <img src="https://raw.githubusercontent.com/mrmartineau/gatsby-theme-code-notes/master/assets/opengraph.png" width="640">

  <h2>A starter for the "Code Notes" Gatsby theme</h2>

  <p>
    <a href="https://github.com/MrMartineau/gatsby-theme-code-notes/blob/master/LICENSE">
      <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="gatsby-theme-code-notes is released under the MIT license." />
    </a>
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome!" />
    <a href="https://twitter.com/intent/follow?screen_name=MrMartineau">
      <img src="https://img.shields.io/twitter/follow/MrMartineau.svg?label=Follow%20@MrMartineau" alt="Follow @MrMartineau" />
    </a>
  </p>

  <p>
    <a href="#Features">Features</a> •
    <a href="#setup">Setup</a> •
    <a href="#usage">Usage</a> •
    <a href="https://code-notes-example.netlify.com/">Demo</a>
  </p>

<a href="https://www.producthunt.com/posts/code-notes-2?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-code-notes-2" target="_blank" aria-label="View Code Notes on Product Hunt"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=206754&theme=light" alt="Code Notes - A Gatsby theme for publishing code-related notes online | Product Hunt Embed" style="width: 250px; height: 54px;" width="250px" height="54px" /></a>

</div>

## Features

- Notes can:
  - be written using Markdown (`.md`) or [MDX](https://mdxjs.com/) (`.mdx`)
  - have zero, one or many tags. See an example [here](https://code-notes-example.netlify.app/syntax-highlighting)
  - have associated emojis 👏
  - be nested in subfolders so you can organise them how you like
- Full syntax highlighting for most programming languages
- Extra markdown features have also been added. Find out more [here](https://code-notes-example.netlify.app/markdown-features)
- Note search powered by the super-fast [Flexsearch](https://github.com/nextapps-de/flexsearch)

# Setup

## Using Gatsby Starter Code Notes

This guide will take you through setting up Code Notes with Gatsby Starter Code Notes.

### Step 1: Starter installation

##### With `gatsby-cli`:

```sh
gatsby new code-notes https://github.com/MrMartineau/gatsby-starter-code-notes
```

##### With `git clone`:

```sh
git clone git@github.com:MrMartineau/gatsby-starter-code-notes.git

cd code-notes

yarn
```

### Step 2: Develop & Build

Once installed or cloned locally and all packages are installed you can begin developing your site.

```sh
# Run localhost
yarn dev

# Build your Gatsby site
yarn build
```

## Usage

### Theme Options

| Key                        | Default value                                             | Description                                                                                                                                                                       |
| -------------------------- | --------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `basePath`                 | `/`                                                       | Root url for all notes pages                                                                                                                                                      |
| `contentPath`              | `/content/notes`                                          | Location of notes content                                                                                                                                                         |
| `logo`                     | `''` (empty string)                                       | Path to your site's logo. Will be used as the `src` attribute for an image                                                                                                        |
| `showDescriptionInSidebar` | `true`                                                    | Show `config.site.description` in the sidebar                                                                                                                                     |
| `gitRepoContentPath`       | `''`                                                      | Set the location for your notes if they're hosted online, e.g. your git repo. This will show a "Edit this page" link underneath each note                                         |
| `showThemeInfo`            | `true`                                                    | Show info about this Gatsby theme                                                                                                                                                 |
| `mdxOtherwiseConfigured`   | `true`                                                    | Configure `gatsby-plugin-mdx`. Note that most sites will not need to use this flag. If your site has already configured `gatsby-plugin-mdx` separately, set this flag `false`.    |
| `flexSearchEngineOptions`  | `{ encode: 'icase', tokenize: 'forward', resolution: 9 }` | Configure FlexSearch's index method. The default value uses FlexSearch's `default` preset. Find out your other options [here](https://github.com/nextapps-de/flexsearch#presets). |

### Example usage

```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-code-notes`,
      options: {
        basePath: '/',
        contentPath: '/content/notes',
        gitRepoContentPath:
          'https://github.com/mrmartineau/gatsby-theme-code-notes/tree/master/example/code-notes/',
        showDescriptionInSidebar: true,
        showThemeInfo: false,
        logo: 'https://brand.zander.wtf/Avatar.png',
      },
    },
  ],
}
```

Add notes to your site by creating `md` or `mdx` files inside `/content/notes`.

> Note that if you've changed the default `contentPath` in the configuration, you'll want to add your markdown files in the directory specified by that path.

### Note frontmatter

Frontmatter information (written in YAML) can be used to add metadata and extra information for your notes

Only the `title` field is required, the rest are optional.

```yaml
---
title: Note metadata
emoji: 😃
tags:
  - metadata
  - info
link: https://zander.wtf
---

```

#### Link

The `link` item is used to display a link that is related to the note itself. It will appear below the title if.

#### Emoji

The `emoji` frontmatter item will add an emoji beside the title on listing views and above the title on individual note pages

#### Tags

The `tags` array frontmatter item allows you to add as many tags to a note as you'd like.

### Advanced usage

#### PWA

Turn your code notes into a PWA using [this extra config](https://github.com/mrmartineau/notes.zander.wtf/blob/master/gatsby-config.js#L20-L38). This requires `gatsby-plugin-manifest` and `gatsby-plugin-offline`.

```js
// gatsby-config.js
{
  resolve: `gatsby-plugin-manifest`,
  options: {
    name: `Zander's Code Notes`,
    short_name: `CodeNotes`,
    description: `Notes on code. My memory bank.`,
    start_url: `/`,
    background_color: `hsl(210, 38%, 95%)`,
    theme_color: `hsl(345, 100%, 69%)`,
    display: `standalone`,
    icon: `static/logo.png`,
  },
},
{
  resolve: `gatsby-plugin-offline`,
  options: {
    precachePages: [`/*`, `/tag/*`],
  },
},
```

For more information visit the [Theme repository](https://github.com/MrMartineau/gatsby-theme-code-notes)

---

## License

[MIT](https://choosealicense.com/licenses/mit/) © [Zander Martineau](https://zander.wtf)

> Made by Zander • [zander.wtf](https://zander.wtf) • [GitHub](https://github.com/mrmartineau/) • [Twitter](https://twitter.com/mrmartineau/)
