module.exports = {
  siteMetadata: {
    title: "Imran Pollob's Codes",
    description: `Imran Pollob`,
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
        logo: "https://i.ibb.co/jW5KBs5/logo.png",
      },
    },
  ],
};
