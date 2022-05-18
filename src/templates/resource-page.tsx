import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Badge,
  chakra,
  Container,
  Heading,
  Icon,
  Wrap,
} from "@chakra-ui/react";
import type { PageProps } from "gatsby";
import { graphql } from "gatsby";
import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { Breadcrumbs } from "../components/breadcrumbs";
import { FeaturedBadge } from "../components/featured-badge";
import { RenderHtml } from "../components/render-html";
import type { HeadingNode } from "../components/resources-layout";
import {
  buildingHeadingsTree,
  ResourcesLayout,
  TOC,
} from "../components/resources-layout";
import Title from "../components/title";
import type { ResourcePageBySlugQuery } from "../generated/graphql-types";
import type { ResourcePageContext } from "../misc/resource-page-context";

const headingElementTags = ["h2", "h3"];

function headingText(htmlAst: any) {
  if (htmlAst.type === "text") {
    return htmlAst.value + " ";
  } else if (htmlAst.children) {
    return htmlAst.children.map(headingText).join("");
  }
  return "";
}

function headingLink(htmlAst: any): string | undefined {
  if (htmlAst.tagName === "a") {
    return htmlAst.properties.href;
  } else if (htmlAst.children) {
    return htmlAst.children.map(headingLink).filter((x: any) => !!x)[0];
  }
  return undefined;
}

export default function ResourcePageBySlug({
  data,
  pageContext,
}: PageProps<ResourcePageBySlugQuery, ResourcePageContext>) {
  const post = data.markdownRemark;
  const htmlAst = post?.htmlAst;

  let headings: HeadingNode[] = [];
  if (htmlAst) {
    const headingElements = htmlAst.children.filter((x: any) =>
      headingElementTags.includes(x.tagName)
    );
    const headingValues = headingElements.map((x: any) => ({
      level: parseInt(x.tagName.substring(1), 10) - 1,
      text: headingText(x).trim(),
      link: headingLink(x),
    }));
    headings = buildingHeadingsTree(headingValues, { idx: 0 }, 1);
  }

  return (
    <>
      <Title title={post?.frontmatter?.title ?? "Post"} />
      <ResourcesLayout headings={headings}>
        <Container
          my={8}
          as="article"
          itemScope
          itemType="http://schema.org/Article"
        >
          <Breadcrumbs breadcrumbs={pageContext.breadcrumbs} />
          <chakra.header pb={2}>
            <Heading as="h1" size="3xl" itemProp="headline">
              {post?.frontmatter?.title}{" "}
            </Heading>
            <Wrap mt={4}>
              {post?.frontmatter?.updatedDate ? (
                <Badge textTransform="none">
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
                <Badge textTransform="none">
                  <Icon as={AiOutlineUser} aria-label="author" />{" "}
                  <span itemProp="author">{post?.frontmatter?.author}</span>
                </Badge>
              ) : undefined}
              {post?.frontmatter?.isFeatured ? <FeaturedBadge /> : undefined}
            </Wrap>
          </chakra.header>
          {headings.length ? (
            <Accordion
              display={{ base: "block", lg: "none" }}
              visibility={{ base: "visible", lg: "hidden" }}
              w="100%"
              p={0}
              m={0}
              bgColor="gray.50"
              zIndex={2}
              allowToggle
            >
              <AccordionItem>
                <AccordionButton>Table of Contents</AccordionButton>
                <AccordionPanel>
                  <TOC nodes={headings} noLeftMargin />
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          ) : undefined}
          <chakra.section zIndex={1}>
            <RenderHtml htmlAst={post?.htmlAst} />
          </chakra.section>
        </Container>
      </ResourcesLayout>
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
        isFeatured
      }
    }
  }
`;
