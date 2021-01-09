module.exports = {
  siteMetadata: {
    title: `i am rivas`,
    description: `This is the portfolio of Rivas.`,
    author: `@JohnRivas`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/rivas-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-drupal",
      options: {
        baseUrl: "http://d8.iamrivas.com/",
        apiBase: "jsonapi", // endpoint of Drupal server
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
