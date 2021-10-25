import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Heading,
  Link,
  Text,
} from "@chakra-ui/react";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { CategoryCards } from "../components/category-cards";
import { Layout } from "../components/layout";
import { ResourceCards } from "../components/resource-cards";
import { Search } from "../components/search";
import Title from "../components/title";
import { ResourcesQuery } from "../generated/graphql-types";

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

  return (
    <>
      <Title title="Resources" />
      <Layout>
        <Container my={8}>
          <Breadcrumb>
            <BreadcrumbItem key="home">
              <BreadcrumbLink href={`/`}>Home</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading as="h1" size="2xl">
            All Resources
          </Heading>
          <Text>
            We are continually improving Midspace's help resources.{" "}
            <Link href="https://midspace.app/contact">Contact us</Link> if you
            have a suggestion for how we could improve these resources. (Or
            contribute directly{" "}
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
      </Layout>
    </>
  );
}
