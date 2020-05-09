const path = require("path")

module.exports = {
  siteMetadata: {
    siteUrl: "https://1app4.pt",
    title: "1APP4PT",
    author: "Tech4covid19",
    authorUrl: "https://tech4covid19.org",
    description: "Unindo esforços para combater digitalmente o COVID-19",
    keywords: "COVID-19, Coronavírus, projectos, Apps, portugueses, pandemia",
    enrollmentUrl: "https://api.1app4.pt/api/v1/enrollment",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: `${__dirname}/src/assets/`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "gtm-id-here",
        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,
        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },
      },
    },
    {
      resolve: "gatsby-plugin-alias-imports",
      options: {
        alias: {
          "@": path.join(__dirname, "src"),
        },
        extensions: ["js", "jsx", "css", "scss"],
      },
    },
    "gatsby-plugin-sitemap",
  ],
}
