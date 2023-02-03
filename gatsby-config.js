require('dotenv').config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: `DVLP NFT`,
    description: `DVLP NFT.`,
    author: `@vculum`,
    siteUrl: `https://dvlpnft.io`,
  },
  //commented out via VINE-591
  plugins: [
    ////  {
    ////    resolve: `gatsby-plugin-google-gtag`,
    ////    options: {
    // You can add multiple tracking ids and a pageview event will be fired for all of them.
    ////      trackingIds: ['G-P6XN7GHF0Y'],
    // This object gets passed directly to the gtag config command
    // This config will be shared across all trackingIds
    /* gtagConfig: {
        optimize_id: "OPT_CONTAINER_ID",
        anonymize_ip: true,
        cookie_expires: 0,
      }, */
    // This object is used for configuration specific to this plugin
    ////      pluginConfig: {
    // Puts tracking script in the head instead of the body
    ////        head: true,
    // Setting this parameter is also optional
    //respectDNT: true,
    // Avoids sending pageview hits from custom paths
    //exclude: ["/preview/**", "/do-not-track/me/too/"],
    // Defaults to https://www.googletagmanager.com
    //origin: "YOUR_SELF_HOSTED_ORIGIN",
    ////      },
    ////    },
    ////  },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
        slugify: {
          decamelize: false, // disable default slugify formatting on contract address
        },
      },
    },
    {
      resolve: `gatsby-transformer-json`,
      options: {
        typeName: `Nft`, // a fixed string
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/data/nfts`,
        name: `nfts`,
      },
    },
    //  {
    //   resolve: `gatsby-transformer-json`,
    //   options: {
    //     // Conditionally set the typeName so that we both use a lowercased and capitalized type name
    //     typeName: ({ node }) => {
    //       const name = node.sourceInstanceName;
    //       if (name === `nfts`) {
    //         return `nft`;
    //       }
    //       return name;
    //     },
    //   },
    //},
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `${__dirname}/nfts`,
    //     name: `nfts`,
    //   },
    // },
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        offset: -100,
        duration: 2000,
      },
    },
    /* {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: process.env.GATSBY_API_URL,
        accessToken: process.env.GATSBY_API_TOKEN,
        collectionTypes: [`participants`, `ownerships`, `medias`, `clearings`, `marketing-interests`],
        singleTypes: [],
        queryLimit: 1000,
      }
    }, */
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/DVLPLogoSingle.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
