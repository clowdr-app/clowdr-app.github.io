/** @type import("@graphql-codegen/plugin-helpers").Types.Config */
module.exports = {
  overwrite: true,
  schema: "./src/generated/gatsby-introspection.graphql",
  documents: [
    "src/**/*.tsx",
    "gatsby-node.js",
    "node_modules/gatsby-transformer-sharp/src/fragments.js",
  ],
  pluckConfig: {
    modules: [
      {
        name: "gatsby",
        identifier: "graphql",
      },
    ],
  },
  generates: {
    "./src/generated/graphql-types.d.ts": {
      plugins: ["typescript", "typescript-operations"],
    },
    // "./src/generated/graphql.json": {
    //   plugins: ["introspection"],
    // },
  },
};
