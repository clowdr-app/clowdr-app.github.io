/** @type import("graphql-config").IGraphQLConfig */
module.exports = {
  schema: ["src/generated/gatsby-introspection.graphql"],
  documents: ["src/**/*.tsx"],
  extensions: {
    endpoints: {
      default: {
        url: "http://localhost:8000/___graphql",
        headers: { "user-agent": "JS GraphQL" },
        introspect: false,
      },
    },
  },
};
