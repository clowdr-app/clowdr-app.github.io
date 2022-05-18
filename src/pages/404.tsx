import { Box, Container, Heading, Text } from "@chakra-ui/react";
import type { PageProps } from "gatsby";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Layout } from "../components/layout";
import { Search } from "../components/search";
import Title from "../components/title";
import type { Page404Query } from "../generated/graphql-types";

export default function PageNotFound({ location }: PageProps): JSX.Element {
  const result: Page404Query = useStaticQuery<Page404Query>(graphql`
    query Page404 {
      localSearchResources {
        index
        store
      }
    }
  `);
  return (
    <>
      <Title title="Page not found" />
      <Layout>
        <Container my={8}>
          <Heading as="h2" textAlign="center">
            Sorry, we couldn&apos;t find that page.
          </Heading>
          <Text>
            Perhaps it has moved? Don&apos;t worry, search for it here!
          </Text>

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
    </>
  );
}
