import { Box, Container, Heading, Link, Text } from "@chakra-ui/react";
import { graphql, Link as GatsbyLink, useStaticQuery } from "gatsby";
import React from "react";
import { ResourcesLayout } from "../components/layouts/resources-layout";
import { CategoryCards } from "../components/resources/category-cards";
import { FeaturedCards } from "../components/resources/featured-cards";
import { ResourceCards } from "../components/resources/resource-cards";
import { Search } from "../components/resources/search";
import Title from "../components/title";
import type { ResourcesQuery } from "../generated/graphql-types";

export default function Resources() {
  const result: ResourcesQuery = useStaticQuery<ResourcesQuery>(graphql`
    query Resources {
      allMarkdownRemark(
        sort: { fields: [frontmatter___title], order: ASC }
        filter: {
          fields: {
            collection: { eq: "resources" }
            slug: { regex: "/^/[^/]+[/]?$/" }
          }
        }
      ) {
        nodes {
          ...NodeSummary
        }
      }
      featuredMarkdownRemark: allMarkdownRemark(
        sort: { fields: [frontmatter___title], order: ASC }
        filter: { frontmatter: { isFeatured: { eq: true } } }
      ) {
        nodes {
          ...NodeSummary
        }
      }
      localSearchResources {
        index
        store
      }
    }
  `);
  const categoryNodes = result.allMarkdownRemark.nodes.filter(
    node => node.fields?.isCategoryIndex
  );
  const resourceNodes = result.allMarkdownRemark.nodes.filter(
    node => !node.fields?.isCategoryIndex
  );

  const categoriesEl = categoryNodes.length ? (
    <CategoryCards categoryNodes={categoryNodes} mt={2} />
  ) : undefined;

  const resourcesEl = resourceNodes.length ? (
    <ResourceCards resourceNodes={resourceNodes} mt={4} />
  ) : undefined;

  const featuredEl = result.featuredMarkdownRemark.nodes.length ? (
    <FeaturedCards featuredNodes={result.featuredMarkdownRemark.nodes} mt={4} />
  ) : undefined;

  return (
    <>
      <Title title="Resources" />
      <ResourcesLayout>
        <Container my={8}>
          <Heading as="h1" size="3xl">
            Resources
          </Heading>
          <Text>
            We are continually improving Midspace&apos;s help resources.{" "}
            <Link as={GatsbyLink} to="/contact">
              Contact us
            </Link>{" "}
            if you have a suggestion for how we could improve these resources.
            (Or contribute directly{" "}
            <Link href="https://github.com/clowdr-app/clowdr-app.github.io/">
              on GitHub
            </Link>
            !)
          </Text>
          {result.localSearchResources?.index &&
          result.localSearchResources.store ? (
            <Box my={8}>
              <Search
                index={result.localSearchResources.index}
                store={result.localSearchResources.store}
              />
            </Box>
          ) : undefined}
          {result.featuredMarkdownRemark.nodes.length ? (
            <>
              <Heading as="h2" size="xl" mb={4}>
                Featured
              </Heading>
              {featuredEl}
            </>
          ) : undefined}
          <Heading as="h2" size="xl" mb={4}>
            Categories
          </Heading>
          {categoriesEl}
          {resourcesEl}
          {!categoryNodes.length && !resourceNodes.length ? (
            <Text mt={8}>
              Sorry, there are no resources available right now.
            </Text>
          ) : undefined}
        </Container>
      </ResourcesLayout>
    </>
  );
}
