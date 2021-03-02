require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Bryan Johnston Cichlids`,
    description: `The UK's best selection of high grade Flowerhorns imported from Thailand and Indonesia`,
    author: `@bry.johnston.526`,
    image: `/social-img.png`,
    siteUrl: `https://www.bryanjohnstoncichlids.co.uk`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Tillana: 600, 700, 800`, `Jost: 400, 500, 600, 700, 800, 900`],
        display: "swap",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: "http://localhost:1337",
        queryLimit: 1000, // Default to 100
        contentTypes: [`user`],
        //If using single types place them in this array.
        singleTypes: [`hero-section`],
      },
    },

    // {
    //   resolve: `gatsby-source-instagram-all`,
    //   options: {
    //     access_token: process.env.INSTAGRAM_TOKEN,
    //   },
    // },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
