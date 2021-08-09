import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Heading,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { CategoryCard } from "../components/CategoryCard";
import { Layout } from "../components/Layout";
import { Search } from "../components/Search";
import Title from "../components/Title";
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
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            description
            author
          }
        }
      }
      localSearchResources {
        index
        store
      }
    }
  `);
  const categoryNodes = result.allMarkdownRemark.nodes;

  const categoriesEl = categoryNodes.length ? (
    <SimpleGrid columns={{ sm: 1, lg: 2 }} spacing={4}>
      {categoryNodes.map((node, i) => (
        <CategoryCard
          key={i}
          indexUrl={node.fields?.slug ?? "#"}
          descriptionHtml={node.frontmatter?.description ?? node.excerpt ?? ""}
          title={node.frontmatter?.title ?? "(No title)"}
          type="category"
        />
      ))}
    </SimpleGrid>
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
            <BreadcrumbItem key="resources" isCurrentPage={true}>
              <BreadcrumbLink __css={{}}>All Resources</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading as="h1" size="2xl">
            All Resources
          </Heading>
          <Text>
            We are continually improving Clowdr's help resources.{" "}
            <Link href="https://clowdr.org/contact-us">Contact us</Link> if you
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
        </Container>
      </Layout>
    </>
  );
}
