const { default: gql } = require("fake-tag");
const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require("path");

/** @type import('gatsby').GatsbyNode['onCreateWebpackConfig'] */
exports.onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage.startsWith("develop")) {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          "react-dom": "@hot-loader/react-dom",
        },
        fallback: {
          path: require.resolve("path-browserify"),
        },
      },
    });
  }
};

/** @type import('gatsby').GatsbyNode['createPages'] */
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage, createRedirect } = actions;

  /// Create blog post pages

  // Get all markdown blog posts sorted by date
  const allRemark = await graphql(gql`
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: ASC }
        limit: 1000
      ) {
        edges {
          node {
            id
            fields {
              collection
              slug
            }
            frontmatter {
              slug
              title
            }
          }
        }
      }
    }
  `);

  if (allRemark.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      allRemark.errors
    );
    return;
  }

  const allEdges = allRemark.data.allMarkdownRemark.edges;

  const resourceEdges = allEdges.filter(
    edge => edge.node.fields.collection === `resources`
  );

  resourceEdges.forEach(edge => {
    createPage({
      path: `/resources/${edge.node.frontmatter.slug}`,
      component: path.resolve(`./src/templates/resource-page.tsx`),
      context: {
        id: edge.node.id,
        slug: edge.node.frontmatter.slug,
      },
    });
  });

  /// Redirects
  const redirects = [
    { fromPath: "/faq/video-subtitles/", toPath: "/resources/video-subtitles" },
  ];
  redirects.forEach(redirect =>
    createRedirect({
      ...redirect,
      isPermanent: true,
    })
  );
};

/** @type import('gatsby').GatsbyNode['onCreateNode'] */
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: `slug`,
      node,
      value,
    });

    const parent = getNode(node.parent);

    createNodeField({
      node,
      name: "collection",
      value: parent.sourceInstanceName,
    });
  }
};

/** @type import('gatsby').GatsbyNode['createSchemaCustomization'] */
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(gql`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }
    type Author {
      name: String
      summary: String
    }
    type Social {
      twitter: String
    }
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }
    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }
    type Fields {
      slug: String
    }
  `);
};
