import {
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  chakra,
  Container,
  Heading,
  Icon,
} from "@chakra-ui/react";
import { graphql, PageProps } from "gatsby";
import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { Layout } from "../components/Layout";
import { RenderHtml } from "../components/RenderHtml";
import Title from "../components/Title";
import { ResourcePageBySlugQuery } from "../generated/graphql-types";
import { ResourcePageContext } from "../misc/resource-page-context";

export default function ResourcePageBySlug({
  data,
  pageContext,
}: PageProps<ResourcePageBySlugQuery, ResourcePageContext>) {
  const post = data.markdownRemark;

  return (
    <>
      <Title title={post?.frontmatter?.title ?? "Post"} />
      <Layout>
        <Container
          my={8}
          as="article"
          itemScope
          itemType="http://schema.org/Article"
          overflowX="auto"
        >
          <Breadcrumb>
            {pageContext.breadcrumbs.map(breadcrumb => (
              <BreadcrumbItem key={breadcrumb.url}>
                <BreadcrumbLink href={`/resources${breadcrumb.url}`}>
                  {breadcrumb.title}
                </BreadcrumbLink>
              </BreadcrumbItem>
            ))}
          </Breadcrumb>
          <header>
            <Heading as="h1" size="2xl" itemProp="headline">
              {post?.frontmatter?.title}
            </Heading>
            {post?.frontmatter?.updatedDate ? (
              <Badge mt={4} mr={2} textTransform="none">
                Updated{" "}
                <time
                  itemProp="dateModified"
                  dateTime={post?.frontmatter?.isoUpdatedDate}
                >
                  {post?.frontmatter?.updatedDate}
                </time>
              </Badge>
            ) : undefined}
            {post?.frontmatter?.author ? (
              <Badge mt={4} textTransform="none">
                <Icon as={AiOutlineUser} aria-label="author" />{" "}
                <span itemProp="author">{post?.frontmatter?.author}</span>
              </Badge>
            ) : undefined}
          </header>
          <chakra.section
            sx={{
              h3: {
                size: "xl",
              },
              h4: {
                size: "lg",
              },
              h5: {
                fontWeight: "bolder",
                size: "md",
              },
            }}
          >
            <RenderHtml htmlAst={post?.htmlAst} />
          </chakra.section>
        </Container>
      </Layout>
    </>
  );
}

export const query = graphql`
  query ResourcePageBySlug($id: String!) {
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
        isoUpdatedDate: updatedDate
        description
        author
      }
    }
  }
`;
