module.exports = {
  siteMetadata: {
    title: 'gatsby-starter-code-notes',
    description: `A starter for gatsby-theme-code-notes`,
    author: 'Zander',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-code-notes',
      options: {
        contentPath: 'notes',
        basePath: '/',
        showThemeInfo: true,
        showDescriptionInSidebar: true,
      },
    },
  ],
}
