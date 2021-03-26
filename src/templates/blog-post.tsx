import {
  chakra,
  Container,
  Heading,
  Link,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { graphql, Link as GatsbyLink } from "gatsby";
import React from "react";
import rehypeReact from "rehype-react";
import unified from "unified";
import { Layout } from "../components/Layout";
import Title from "../components/Title";
import { BlogPostBySlugQuery } from "../graphql";

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
  },
});

export const renderAst = (ast: any): JSX.Element => {
  return (processor.stringify(ast) as unknown) as JSX.Element;
};

export default function BlogPost({
  data,
  location,
}: {
  data: BlogPostBySlugQuery;
  location: any;
}) {
  const post = data.markdownRemark;
  const { previous, next } = data;

  return (
    <>
      <Title title={post?.frontmatter?.title ?? "Post"} />
      <Layout>
        <Container
          as="article"
          itemScope
          itemType="http://schema.org/Article"
          overflowX="auto"
        >
          <header>
            <Heading as="h1" itemProp="headline">
              {post?.frontmatter?.title}
            </Heading>
            <p>{post?.frontmatter?.date}</p>
          </header>
          <section>{renderAst(post?.htmlAst)}</section>
          <hr />
        </Container>
        <nav className="blog-post-nav">
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous?.fields?.slug && (
                <Link as={GatsbyLink} to={previous.fields.slug} rel="prev">
                  ← {previous?.frontmatter?.title}
                </Link>
              )}
            </li>
            <li>
              {next?.fields?.slug && (
                <Link as={GatsbyLink} to={next.fields.slug} rel="next">
                  {next?.frontmatter?.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </Layout>
    </>
  );
}

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
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
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;
