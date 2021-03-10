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
    `gatsby-plugin-scss-typescript`,
    `gatsby-plugin-cname`,
    `@chakra-ui/gatsby-plugin`,
  ],
}
