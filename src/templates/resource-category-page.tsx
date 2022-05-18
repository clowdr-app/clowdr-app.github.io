import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  chakra,
  Container,
  Heading,
  HStack,
  Icon,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import type { PageProps } from "gatsby";
import { graphql } from "gatsby";
import React, { useMemo } from "react";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { ResourcesLayout } from "../components/layouts/resources-layout";
import { Breadcrumbs } from "../components/resources/breadcrumbs";
import { CategoryCards } from "../components/resources/category-cards";
import { ResourceCards } from "../components/resources/resource-cards";
import Title from "../components/title";
import type { ResourceCategoryBySlugQuery } from "../generated/graphql-types";
import type { ResourcePageContext } from "../misc/resource-page-context";

export default function ResourceCategoryBySlug({
  data,
  pageContext,
}: PageProps<ResourceCategoryBySlugQuery, ResourcePageContext>) {
  const post = data.markdownRemark;
  const categoryNodes = data.allMarkdownRemark.nodes.filter(
    node => node.fields?.isCategoryIndex
  );
  const resourceNodes = data.allMarkdownRemark.nodes.filter(
    node => !node.fields?.isCategoryIndex
  );

  const isUpToDate = useMemo(() => {
    const updatedAt = post?.frontmatter?.updatedDate;
    if (!updatedAt) {
      return false;
    }
    try {
      const updatedAtMs = Date.parse(updatedAt);
      const diff = Date.now() - updatedAtMs;
      return diff < 60 * 24 * 60 * 60 * 1000;
    } catch {
      return false;
    }
  }, [post?.frontmatter?.updatedDate]);
  const isComprehensive = Boolean(post?.frontmatter?.isComprehensive);

  const categoriesEl = categoryNodes.length ? (
    <CategoryCards categoryNodes={categoryNodes} mt={12} />
  ) : undefined;

  const resourcesEl = resourceNodes.length ? (
    <ResourceCards resourceNodes={resourceNodes} mt={12} />
  ) : undefined;

  return (
    <>
      <Title title={post?.frontmatter?.title ?? "Category"} />
      <ResourcesLayout>
        <Container
          my={8}
          as="article"
          itemScope
          itemType="http://schema.org/Article"
          overflowX="auto"
        >
          <Breadcrumbs breadcrumbs={pageContext.breadcrumbs} />
          <header>
            <Heading as="h1" size="3xl" itemProp="headline">
              <Icon
                m={2}
                verticalAlign="middle"
                as={AiOutlineFolderOpen}
                title="Category"
                w={16}
                h={16}
                aria-label="Category"
              />{" "}
              <chakra.span verticalAlign="middle">
                {post?.frontmatter?.title}
              </chakra.span>
            </Heading>
          </header>
          <chakra.section
            sx={
              {
                //   h3: {
                //     size: "xl",
                //   },
                //   h4: {
                //     size: "lg",
                //   },
                //   h5: {
                //     fontWeight: "bolder",
                //     size: "md",
                //   },
              }
            }
          >
            {post?.htmlAst?.children?.length ? (
              renderAst(post?.htmlAst)
            ) : (
              <Text>{post?.frontmatter?.description}</Text>
            )}
          </chakra.section>
          {!isUpToDate ? (
            <Alert
              status="warning"
              as={VStack}
              alignItems="flex-start"
              mt={8}
              mb={isComprehensive ? 8 : 0}
            >
              <HStack>
                <AlertIcon />
                <AlertTitle>This page may be out of date</AlertTitle>
              </HStack>
              <AlertDescription>
                This page has not been updated in the last 60 days and is likely
                out of date. Although the information may be useful, the
                instructions, images, videos or other descriptions of Midspace
                might not match the current design of Midspace. If you would
                like to help keep the documentation of Midspace up to date,
                please make a pull request to this site&apos;s{" "}
                <Link href="https://github.com/clowdr-app/clowdr-app.github.io/">
                  GitHub pages repository
                </Link>
                .
              </AlertDescription>
            </Alert>
          ) : undefined}
          {!isComprehensive ? (
            <Alert
              status="info"
              as={VStack}
              alignItems="flex-start"
              mt={isUpToDate ? 8 : 0}
              mb={8}
            >
              <HStack>
                <AlertIcon />
                <AlertTitle>Incomplete documentation</AlertTitle>
              </HStack>
              <AlertDescription>
                We are gradually working on expanding the documentation of
                Midspace. The information here is currently marked as
                incomplete. If you would like help expand the documentation,
                please make a pull request to this site&apos;s{" "}
                <Link href="https://github.com/clowdr-app/clowdr-app.github.io/">
                  GitHub pages repository
                </Link>
                .
              </AlertDescription>
            </Alert>
          ) : undefined}
          {categoriesEl}
          {resourcesEl}
          {!categoryNodes.length && !resourceNodes.length ? (
            <Text mt={8}>
              Sorry, there&apos;s nothing in this category yet!
            </Text>
          ) : undefined}
        </Container>
      </ResourcesLayout>
    </>
  );
}

export const query = graphql`
  query ResourceCategoryBySlug($id: String!, $regex: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      htmlAst
      frontmatter {
        title
        updatedDate
        description
        isComprehensive
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___index, frontmatter___title], order: ASC }
      filter: {
        fields: { collection: { eq: "resources" }, slug: { regex: $regex } }
      }
    ) {
      nodes {
        ...NodeSummary
      }
    }
  }

  fragment NodeSummary on MarkdownRemark {
    excerpt
    fields {
      slug
      isCategoryIndex
    }
    frontmatter {
      title
      description
      author
      isFeatured
      updatedDate
    }
  }
`;
