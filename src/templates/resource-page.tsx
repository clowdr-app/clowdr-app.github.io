import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Badge,
  chakra,
  Container,
  Heading,
  HStack,
  Icon,
  Link,
  VStack,
  Wrap,
} from "@chakra-ui/react";
import type { PageProps } from "gatsby";
import { graphql } from "gatsby";
import React, { useMemo } from "react";
import { AiOutlineUser } from "react-icons/ai";
import type { HeadingNode } from "../components/layouts/resources-layout";
import {
  buildingHeadingsTree,
  ResourcesLayout,
  TOC,
} from "../components/layouts/resources-layout";
import { RenderHtml } from "../components/render-html";
import { Breadcrumbs } from "../components/resources/breadcrumbs";
import { FeaturedBadge } from "../components/resources/featured-badge";
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

  const isUpToDate = useMemo(() => {
    const updatedAt = post?.frontmatter?.isoUpdatedDate;
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
  }, [post?.frontmatter?.isoUpdatedDate]);
  const isComprehensive = Boolean(post?.frontmatter?.isComprehensive);

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
        isComprehensive
      }
    }
  }
`;
