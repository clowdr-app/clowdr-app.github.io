/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    siteUrl: "https://clowdr.org/",
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet-async`,
    `gatsby-plugin-cname`,
    `@chakra-ui/gatsby-plugin`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`lato`],
        display: "swap",
      },
    },
    // Disable while plugin is broken
    // {
    //   resolve: "gatsby-plugin-tinacms",
    //   options: {
    //     sidebar: {
    //       hidden: process.env.NODE_ENV === "production",
    //       position: "displace",
    //     },
    //     manualInit: true,
    //     plugins: ["gatsby-tinacms-git", "gatsby-tinacms-remark"],
    //   },
    // },
  ],
};
