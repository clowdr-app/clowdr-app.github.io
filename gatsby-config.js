/** @type import("gatsby-transformer-remark").RemarkConfig */
const transformerRemark = {
  resolve: `gatsby-transformer-remark`,
  options: {
    plugins: [
      {
        resolve: "gatsby-remark-embed-video",
        options: {
          width: 800,
          ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
          height: 400, // Optional: Overrides optional.ratio
          related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
          noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
          loadingStrategy: "lazy", //Optional: Enable support for lazy-load offscreen iframes. Default is disabled.
          urlOverrides: [
            {
              id: "youtube",
              embedURL: videoId =>
                `https://www.youtube-nocookie.com/embed/${videoId}`,
            },
          ], //Optional: Override URL of a service provider, e.g to enable youtube-nocookie support
          containerClass: "embedVideo-container", //Optional: Custom CSS class for iframe container, for multiple classes separate them by space
          iframeId: false, //Optional: if true, iframe's id will be set to what is provided after 'video:' (YouTube IFrame player API requires iframe id)
        },
      },
      {
        resolve: `gatsby-remark-responsive-iframe`,
        options: {
          wrapperStyle: `margin-bottom: 1.0725rem`,
        },
      },
      `gatsby-remark-prismjs`,
      {
        resolve: `gatsby-remark-relative-images`,
        options: {
          staticFolderName: "static",
        },
      },
      {
        resolve: `gatsby-remark-images`,
        options: {
          maxWidth: 630,
        },
      },
      `gatsby-remark-copy-linked-files`,
      `gatsby-remark-smartypants`,
    ],
  },
};

/**
 * @type import("gatsby-plugin-local-search/dist/types").PluginOptions
 */
const localSearchOptions = {
  name: "resources",
  engine: "lunr",
  query: `
      {
        allMarkdownRemark {
          nodes {
            id
            fields {
              slug
            }
            frontmatter {
              title
              description
              author
            }
            rawMarkdownBody
          }
        }
      }
    `,
  ref: "id",
  index: ["title", "body"],
  store: ["id", "slug", "title", "description", "author"],

  // Function used to map the result from the GraphQL query. This should
  // return an array of items to index in the form of flat objects
  // containing properties to index. The objects must contain the `ref`
  // field above (default: 'id'). This is required.
  normalizer: ({ data }) =>
    data.allMarkdownRemark.nodes.map(node => ({
      id: node.id,
      slug: node.fields.slug,
      title: node.frontmatter.title,
      body: node.rawMarkdownBody,
      author: node.frontmatter.author,
      description: node.frontmatter.description,
    })),
};

/** @type import("gatsby").GatsbyConfig */
module.exports = {
  siteMetadata: {
    siteUrl: "https://clowdr.org/",
  },
  plugins: [
    `gatsby-plugin-typescript`,
    {
      resolve: "gatsby-plugin-extract-schema",
      options: {
        dest: `${__dirname}/src/generated/gatsby-introspection.graphql`,
      },
    },
    `gatsby-plugin-react-helmet-async`,
    `gatsby-plugin-cname`,
    `@chakra-ui/gatsby-plugin`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/resources`,
        name: `resources`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/images`,
        name: `images`,
      },
    },
    transformerRemark,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`lato`],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Clowdr`,
        short_name: `Clowdr`,
        start_url: `/`,
        background_color: `#16703f`,
        theme_color: `#16703f`,
        display: `standalone`,
        icon: `static/favicons/favicon-32x32.png`,
        icons: [
          {
            src: "/favicons/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/favicons/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    },
    `gatsby-plugin-meta-redirect`,
    {
      resolve: `gatsby-plugin-local-search`,
      options: localSearchOptions,
    },
  ],
};
