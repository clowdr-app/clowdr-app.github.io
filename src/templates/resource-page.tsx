import {
  Badge,
  chakra,
  Container,
  Divider,
  Heading,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { graphql } from "gatsby";
import React from "react";
import rehypeReact from "rehype-react";
import { unified } from "unified";
import { Layout } from "../components/Layout";
import Title from "../components/Title";
import { ResourcePageBySlugQuery } from "../generated/graphql";

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

export default function ResourcePageBySlug({
  data,
  location,
}: {
  data: ResourcePageBySlugQuery;
  location: any;
}) {
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
          <header>
            <Heading as="h2" size="2xl" itemProp="headline">
              {post?.frontmatter?.title}
            </Heading>
            <Badge mt={4}>Updated {post?.frontmatter?.updatedDate}</Badge>
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
            {renderAst(post?.htmlAst)}
          </chakra.section>
        </Container>
      </Layout>
    </>
  );
}

export const pageQuery = graphql`
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
        description
      }
    }
  }
`;
