import { chakra, Container, Heading, Icon, Text } from "@chakra-ui/react";
import type { PageProps } from "gatsby";
import { graphql } from "gatsby";
import React from "react";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { Breadcrumbs } from "../components/breadcrumbs";
import { CategoryCards } from "../components/category-cards";
import { ResourceCards } from "../components/resource-cards";
import { ResourcesLayout } from "../components/resources-layout";
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

  const categoriesEl = categoryNodes.length ? (
    <CategoryCards categoryNodes={categoryNodes} mt={2} />
  ) : undefined;

  const resourcesEl = resourceNodes.length ? (
    <ResourceCards resourceNodes={resourceNodes} mt={4} />
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
        updatedDate(formatString: "MMMM DD, YYYY")
        description
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
    }
  }
`;
