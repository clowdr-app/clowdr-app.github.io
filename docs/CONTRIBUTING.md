# Contributing

This document outlines steps for developers to start working on the site.

This site is built with [Gatsby](https://www.gatsbyjs.com/) and is set up for editing with [Forestry.io](https://forestry.io/).

Gatsby is a static site generator. We use it to turn a tree of Markdown documents into a React-powered static website, hosted through GitHub Pages.

## Running the site locally

To install dependencies, run:

```
npm install
```

To run the site locally in development mode, run:

```
npm run start
```

Now go to http://localhost:8000. The site will automatically update when you edit the underlying content.

You can also build the site in the same way that we do for production. This will exclude any Markdown files whose filenames begin with `draft-`.

```
npm run build
npm run serve
```

You can now view the site at http://localhost:9000

## Forestry integration

You can find the Forestry configuration in the `.forestry/` folder. Forestry can generate a preview of unsaved (or draft) pages using the Gatsby development server. It is configured to use the `forestry:install` and `forestry:preview` commands to do this.
