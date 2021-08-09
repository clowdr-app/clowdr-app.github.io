import {
  Box,
  Container,
  Heading,
  HStack,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { CategoryCard } from "../components/CategoryCard";
import { Layout } from "../components/Layout";
import Title from "../components/Title";
import { FeaturedResourcesQuery } from "../generated/graphql-types";

export default function Home() {
  const result: FeaturedResourcesQuery =
    useStaticQuery<FeaturedResourcesQuery>(graphql`
      query FeaturedResources {
        allMarkdownRemark(
          sort: { fields: [frontmatter___title], order: ASC }
          filter: {
            fields: { collection: { eq: "resources" } }
            frontmatter: { featured: { eq: true } }
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
      }
    `);
  const featuredResourceNodes = result.allMarkdownRemark.nodes;
  return (
    <>
      <Title title="Resources - Clowdr" />
      <Layout>
        <Box w="auto" bgColor="brand.50">
          <HStack
            alignItems="stretch"
            justifyContent="center"
            spacing={0}
            px="20%"
            flexWrap="wrap"
          >
            <Box
              flexBasis="40%"
              flexGrow={1}
              flexShrink={0}
              py={{ base: 2, xl: 12 }}
              px={8}
            >
              <Heading as="h1" size="3xl" lineHeight={1.2}>
                Resources
              </Heading>
              <Text fontSize="3xl" fontWeight="normal" lineHeight={1.6}>
                Organising or attending an event on Clowdr? Learn everything you
                need to know here.
              </Text>
            </Box>
            <Box
              flexBasis="max-content"
              flexGrow={1}
              flexShrink={0}
              py={{ base: 4, xl: 12 }}
              px={4}
              display="flex"
              flexDir="column"
              justifyContent="center"
              h="30rem"
              w="auto"
            >
              <img
                alt="person reading a book"
                src="/artwork/manypixels-reading-book.svg"
              />
            </Box>
          </HStack>
        </Box>

        <Container my={12} maxW="120ch">
          <Heading as="h1" size="2xl" mb={8} textAlign="center">
            Featured resources
          </Heading>
          <SimpleGrid columns={2} spacing={4} mt={2}>
            {featuredResourceNodes.map((node, i) => (
              <CategoryCard
                key={i}
                indexUrl={node.fields?.slug ?? "#"}
                descriptionHtml={
                  node.frontmatter?.description ?? node.excerpt ?? ""
                }
                title={node.frontmatter?.title ?? "(No title)"}
                author={node.frontmatter?.author ?? undefined}
                type="resource"
              />
            ))}
          </SimpleGrid>
        </Container>
      </Layout>
    </>
  );
}
