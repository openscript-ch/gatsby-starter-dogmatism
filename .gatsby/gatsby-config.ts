import { TSConfigFn } from "gatsby-plugin-ts-config";

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

const configuration: TSConfigFn<'config'> = ({ projectRoot }) => ({
  siteMetadata: {
    title: `Gatsby Starter Dogmatism`,
    description: `This is a quite opinionated Gatsby starter.`,
    author: `@gatsbyjs`,
    siteUrl: process.env.SITE_URL || `https://example.com`,
  },
  plugins: [
    // Transformers
    `gatsby-transformer-sharp`,

    // Plugins
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${projectRoot}/content`,
      },
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts the following options, all of which are defined by `@emotion/babel-plugin` plugin.
        // The values for each key in this example are the defaults the plugin uses.
        sourceMap: true,
        autoLabel: "dev-only",
        labelFormat: `[local]`,
        cssPropOptimization: true,
      },
    },
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
        icon: `content/statics/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,

    // Local plugins
    {
      resolve: `gatsby-plugin-i18n-l10n`,
      options: {
        defaultLocale: `en-US`
      }
    }

  ],
});

export default configuration;