const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

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

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage, createRedirect } = actions;

  /// Create blog post pages

  // Get all markdown blog posts sorted by date
  const allRemark = await graphql(
    `
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
    `
  );

  if (allRemark.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      allRemark.errors
    );
    return;
  }

  const allEdges = allRemark.data.allMarkdownRemark.edges;

  const blogEdges = allEdges.filter(
    edge => edge.node.fields.collection === `blog`
  );
  const resourceEdges = allEdges.filter(
    edge => edge.node.fields.collection === `resources`
  );

  console.log(
    `Blog edges: ${blogEdges.length}, resource edges: ${resourceEdges.length}`
  );

  blogEdges.forEach((edge, index) => {
    const previous =
      index === blogEdges.length - 1 ? null : blogEdges[index + 1].node;
    const next = index === 0 ? null : blogEdges[index - 1].node;

    createPage({
      path: `/blog/${edge.node.frontmatter.slug}`,
      component: path.resolve(`./src/templates/blog-post.tsx`),
      context: {
        id: edge.node.id,
        slug: edge.node.frontmatter.slug,
        previous,
        next,
      },
    });
  });

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

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    // const value = createFilePath({ node, getNode });

    // createNodeField({
    //   name: `slug`,
    //   node,
    //   value,
    // });

    const parent = getNode(node.parent);

    createNodeField({
      node,
      name: "collection",
      value: parent.sourceInstanceName,
    });
  }
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
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
