import {
  Box,
  chakra,
  Flex,
  Heading,
  Link,
  LinkBox,
  LinkOverlay,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { graphql, Link as GatsbyLink, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import { Layout } from "../components/Layout";
import Title from "../components/Title";
import { PostsQuery } from "../graphql";

export default function Blog() {
  const result: PostsQuery = useStaticQuery(graphql`
    query Posts {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { fields: { collection: { eq: "blog" } } }
      ) {
        nodes {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            author
            category
            featuredImage {
              childImageSharp {
                gatsbyImageData(width: 700)
              }
            }
          }
        }
      }
    }
  `);
  const posts = result.allMarkdownRemark.nodes;

  return (
    <>
      <Title title="Blog" />
      <Layout>
        <Box mt={12} px={12}>
          <Heading as="h2" size="2xl">
            Blog
          </Heading>
        </Box>
        <Wrap
          as="ol"
          p={50}
          w="full"
          spacing={4}
          alignItems="center"
          listStyleType="none"
          justifyContent="center"
        >
          {posts.map(post => {
            const title = post?.frontmatter?.title || post?.fields?.slug;

            return (
              <WrapItem
                as="li"
                key={post?.fields?.slug}
                flexGrow={{ base: 1, lg: 0 }}
              >
                <LinkBox
                  as="article"
                  itemScope
                  itemType="http://schema.org/Article"
                  mx="auto"
                  rounded="lg"
                  shadow="md"
                  bg={"white"}
                  maxW={{ base: "2xl", lg: "lg" }}
                  w={{ base: "100%", lg: "lg" }}
                >
                  {post?.frontmatter?.featuredImage?.childImageSharp
                    ?.gatsbyImageData ? (
                    <GatsbyImage
                      style={{
                        borderTopLeftRadius: "0.5rem",
                        borderTopRightRadius: "0.5rem",
                        width: "full",
                        height: "16rem",
                        objectFit: "cover",
                      }}
                      image={
                        post.frontmatter.featuredImage.childImageSharp
                          .gatsbyImageData
                      }
                      alt={post?.frontmatter?.title ?? "No description"}
                    />
                  ) : undefined}

                  <Box p={6}>
                    <Box>
                      <chakra.span
                        fontSize="xs"
                        textTransform="uppercase"
                        color={"brand.600"}
                      >
                        {post?.frontmatter?.category}
                      </chakra.span>
                      <Heading as="h2">
                        <LinkOverlay
                          as={GatsbyLink}
                          to={`/blog${post?.fields?.slug ?? "#"}`}
                          itemProp="url"
                          display="block"
                          color={"gray.800"}
                          fontWeight="bold"
                          fontSize="2xl"
                          mt={2}
                          _hover={{
                            color: "gray.600",
                            textDecor: "underline",
                          }}
                        >
                          <span itemProp="headline">{title}</span>
                        </LinkOverlay>
                      </Heading>
                      <Text
                        dangerouslySetInnerHTML={{
                          __html:
                            post?.frontmatter?.description ||
                            post.excerpt ||
                            "",
                        }}
                        itemProp="description"
                        mt={2}
                        fontSize="sm"
                        color={"gray.600"}
                      />
                    </Box>

                    <Box mt={4}>
                      <Flex alignItems="center">
                        <Link
                          mr={2}
                          fontWeight="bold"
                          color={"gray.700"}
                          href="#"
                        >
                          {post?.frontmatter?.author}
                        </Link>
                        <chakra.span mx={1} fontSize="sm" color={"gray.600"}>
                          {post?.frontmatter?.date}
                        </chakra.span>
                      </Flex>
                    </Box>
                  </Box>
                </LinkBox>
              </WrapItem>
            );
          })}
        </Wrap>
      </Layout>
    </>
  );
}
