const gql = require("fake-tag");
const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require("path");
const escapeStringRegexp = require("escape-string-regexp");
const breadcrumb = require("url-breadcrumb");

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
    const { createPage } = actions;

    // Get all markdown blog posts sorted by date
    /** @type import("./gatsby-types").CreatePagesGraphqlReturn */
    const allRemark = await graphql(gql`
    query GetMarkdownEdges {
      allMarkdownRemark(
        sort: { fields: [frontmatter___title], order: ASC }
        limit: 1000
      ) {
        edges {
          node {
            id
            fileAbsolutePath
            fields {
              collection
              slug
              isCategoryIndex
            }
            frontmatter {
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
        /** @type {{name: string, url: string}[]} */
        const rawBreadcrumbs = breadcrumb(edge.node.fields.slug, {
            home: "All Resources",
        });
        const breadcrumbs = rawBreadcrumbs.map(breadcrumb => ({
            ...breadcrumb,
            title:
                allEdges.find(edge => edge.node.fields.slug === `${breadcrumb.url}/`)
                    ?.node?.frontmatter?.title ?? breadcrumb.name,
        }));
        createPage({
            path: `${edge.node.fields.slug}`,
            component: edge.node.fields.isCategoryIndex
                ? path.resolve(`./src/templates/resource-category-page.tsx`)
                : path.resolve(`./src/templates/resource-page.tsx`),
            context: {
                id: edge.node.id,
                slug: edge.node.fields.slug,
                regex: `^${escapeStringRegexp(edge.node.fields.slug)}[^/]+[/]?$/`,
                breadcrumbs,
            },
        });
    });

    /// Redirects
    // const redirects = [
    //   { fromPath: "/faq/video-subtitles/", toPath: "/video-subtitles" },
    // ];
    // redirects.forEach(redirect =>
    //   createRedirect({
    //     ...redirect,
    //     isPermanent: true,
    //   })
    // );
};

function findFileNode({ node, getNode }) {
    // Find the file node.
    let fileNode = node;

    let whileCount = 0;
    while (
        fileNode.internal.type !== `File` &&
        fileNode.parent &&
        getNode(fileNode.parent) !== undefined &&
        whileCount < 101
    ) {
        fileNode = getNode(fileNode.parent);

        whileCount += 1;
        if (whileCount > 100) {
            console.log(
                `It looks like you have a node that's set its parent as itself`,
                fileNode
            );
        }
    }

    return fileNode;
}

/** @type import('gatsby').GatsbyNode['onCreateNode'] */
exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField, deleteNode } = actions;

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

        const fileNode = findFileNode({ node, getNode });
        createNodeField({
            node,
            name: "isCategoryIndex",
            value: path.parse(fileNode.relativePath).name === "index",
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
      featured: Boolean
    }
    type Fields {
      slug: String
    }
  `);
};
