module.exports = {
  siteMetadata: {
    title: "Imran Pollob's Codes",
    description: `My code notes`,
    author: "Imran Pollob",
  },
  plugins: [
    {
      resolve: "gatsby-theme-code-notes",
      options: {
        contentPath: "notes",
        basePath: "/",
        gitRepoContentPath:
          "https://github.com/pollmix/code-note/tree/master/notes/",
        showThemeInfo: false,
        showDescriptionInSidebar: true,
        logo: "notes/logo.png",
      },
    },
  ],
};
