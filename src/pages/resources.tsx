import {
  Box,
  chakra,
  Container,
  Flex,
  Heading,
  Link,
  LinkBox,
  LinkOverlay,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { graphql, Link as GatsbyLink, useStaticQuery } from "gatsby";
import * as R from "ramda";
import React, { useMemo } from "react";
import { Layout } from "../components/Layout";
import Title from "../components/Title";
import { ResourcesQuery } from "../graphql";
function notEmpty<TValue>(value: TValue | null | undefined): value is TValue {
  return value !== null && value !== undefined;
}
export default function Resources() {
  const result: ResourcesQuery = useStaticQuery(graphql`
    query Resources {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { fields: { collection: { eq: "resources" } } }
      ) {
        nodes {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            slug
            description
            author
            categories
            draft
          }
        }
      }
    }
  `);
  const posts = result.allMarkdownRemark.nodes;

  const postsEl = useMemo(() => {
    //const categories = R.uniqBy(p => p.frontmatter?.category, posts);
    // const x = posts.map(p => p.frontmatter?.categories);
    const postCategories = posts.map(
      p => p.frontmatter?.categories?.filter(notEmpty) ?? []
    );
    const allCategories = R.uniq(R.flatten(postCategories)).sort((a, b) =>
      a.localeCompare(b)
    );
    return allCategories.map(category => {
      const categoryPosts = posts
        .filter(
          post =>
            post.frontmatter?.categories &&
            post.frontmatter?.categories.includes(category)
        )
        .sort((a, b) =>
          a.frontmatter?.title && b.frontmatter?.title
            ? a.frontmatter.title.localeCompare(b.frontmatter.title)
            : 0
        );
      return (
        <>
          <Heading as="h3" size="lg" textTransform="capitalize" pt={4}>
            {category}
          </Heading>
          <UnorderedList listStyleType="none" m={0}>
            {categoryPosts
              .filter(post => !post.frontmatter?.draft)
              .map(post => {
                const title = post.frontmatter?.title || post.frontmatter?.slug;

                return (
                  <ListItem>
                    <LinkBox
                      as="article"
                      itemScope
                      itemType="http://schema.org/Article"
                      rounded="lg"
                      shadow="md"
                      bg={"white"}
                      my={4}
                    >
                      <Box p={6}>
                        <Box>
                          <Heading as="h4">
                            <LinkOverlay
                              as={GatsbyLink}
                              to={`/resources/${
                                post?.frontmatter?.slug ?? "#"
                              }`}
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
                            <chakra.span
                              mx={1}
                              fontSize="sm"
                              color={"gray.600"}
                            >
                              {post?.frontmatter?.date}
                            </chakra.span>
                          </Flex>
                        </Box>
                      </Box>
                    </LinkBox>
                  </ListItem>
                );
              })}
            ;
          </UnorderedList>
        </>
      );
    });
  }, [posts]);

  return (
    <>
      <Title title="Resources" />
      <Layout>
        <Container my={12}>
          <Heading as="h2" size="2xl">
            Resources
          </Heading>

          <Text>
            We are beginning to put together a number of pages answering
            frequently asked questions. If you have suggestions, please consider
            leaving a comment on{" "}
            <Link
              isExternal
              href="https://github.com/clowdr-app/clowdr-app.github.io/issues"
            >
              our GitHub repository
            </Link>
            .
          </Text>
          {postsEl}
        </Container>
      </Layout>
    </>
  );
}
