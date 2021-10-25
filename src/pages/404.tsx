import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { graphql, PageProps, useStaticQuery } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet-async";
import { Layout } from "../components/layout2";
import { Search } from "../components/search2";
import { Page404Query } from "../generated/graphql-types";

export default function PageNotFound({ location }: PageProps) {
  const result: Page404Query = useStaticQuery<Page404Query>(graphql`
    query Page404 {
      localSearchResources {
        index
        store
      }
    }
  `);
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Page not found | Midspace</title>
      </Helmet>
      <Container my={8}>
        <Heading as="h2" textAlign="center">
          Sorry, we couldn't find that page.
        </Heading>
        <Text>Perhaps it has moved? Don't worry, search for it here!</Text>

        {result.localSearchResources?.index &&
        result.localSearchResources.store ? (
          <Box my={8}>
            <Search
              index={result.localSearchResources.index}
              store={result.localSearchResources.store}
              initialSearch={location.pathname
                .replaceAll("-", " ")
                .replaceAll("/", " ")
                .replaceAll("clowdr", "midspace")}
            />
          </Box>
        ) : undefined}
      </Container>
    </Layout>
  );
}
