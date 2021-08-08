import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  chakra,
  Container,
  Divider,
  Heading,
  ListItem,
  OrderedList,
  SimpleGrid,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { graphql, PageProps } from "gatsby";
import React from "react";
import rehypeReact from "rehype-react";
import { unified } from "unified";
import { CategoryCard } from "../components/CategoryCard";
import { Layout } from "../components/Layout";
import Title from "../components/Title";
import { ResourceCategoryBySlugQuery } from "../generated/graphql-types";
import { ResourcePageContext } from "../misc/resource-page-context";

const processor = unified().use(rehypeReact, {
  createElement: React.createElement,
  components: {
    p: (props: any) => <Text {...props} />,
    h3: (props: any) => <Heading as="h3" {...props} size="xl" />,
    h4: (props: any) => <Heading as="h4" {...props} size="lg" />,
    h5: (props: any) => <Heading as="h5" {...props} size="md" />,
    h6: (props: any) => <Heading as="h6" {...props} size="sm" />,
    blockquote: (props: any) => <chakra.blockquote {...props} />,
    pre: (props: any) => <chakra.pre {...props} maxW="100%" overflowX="auto" />,
    ol: (props: any) => <OrderedList {...props} />,
    ul: (props: any) => <UnorderedList {...props} />,
    li: (props: any) => <ListItem {...props} />,
    hr: (props: any) => <Divider {...props} />,
  },
});

export const renderAst = (ast: any): JSX.Element => {
  return processor.stringify(ast) as unknown as JSX.Element;
};

export default function ResourceCategoryBySlug({
  data,
  pageContext,
}: PageProps<ResourceCategoryBySlugQuery, ResourcePageContext>) {
  const post = data.markdownRemark;
  const categoryNodes = data.allMarkdownRemark.nodes.filter(
    node => node.fields.isCategoryIndex
  );
  const resourceNodes = data.allMarkdownRemark.nodes.filter(
    node => !node.fields.isCategoryIndex
  );

  const categoriesEl = categoryNodes.length ? (
    <>
      <Heading as="h3" size="xl">
        Subcategories
      </Heading>
      <SimpleGrid columns={2} spacing={4} mt={2}>
        {categoryNodes.map((node, i) => (
          <CategoryCard
            key={i}
            indexUrl={node.fields?.slug ?? "#"}
            descriptionHtml={
              node.frontmatter?.description ?? node.excerpt ?? ""
            }
            title={node.frontmatter?.title ?? "(No title)"}
          />
        ))}
      </SimpleGrid>
    </>
  ) : undefined;

  const resourcesEl = resourceNodes.length ? (
    <SimpleGrid columns={2} spacing={4} mt={2}>
      {resourceNodes.map((node, i) => (
        <CategoryCard
          key={i}
          indexUrl={node.fields?.slug ?? "#"}
          descriptionHtml={node.frontmatter?.description ?? node.excerpt ?? ""}
          title={node.frontmatter?.title ?? "(No title)"}
        />
      ))}
    </SimpleGrid>
  ) : undefined;

  return (
    <>
      <Title title={post?.frontmatter?.title ?? "Category"} />
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
            <Heading as="h2" size="2xl" itemProp="headline">
              Category: {post?.frontmatter?.title}
            </Heading>
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
            {post?.htmlAst?.children?.length ? (
              renderAst(post?.htmlAst)
            ) : (
              <Text>{post?.frontmatter.description}</Text>
            )}
          </chakra.section>
          <chakra.section mt={2}>{categoriesEl}</chakra.section>
          <chakra.section mt={2}>{resourcesEl}</chakra.section>
        </Container>
      </Layout>
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
      sort: { fields: [frontmatter___title], order: ASC }
      filter: {
        fields: { collection: { eq: "resources" }, slug: { regex: $regex } }
      }
    ) {
      nodes {
        excerpt
        fields {
          slug
          isCategoryIndex
        }
        frontmatter {
          title
          description
          author
          draft
        }
      }
    }
  }
`;
