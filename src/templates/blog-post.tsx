import {
  chakra,
  Container,
  Divider,
  Heading,
  Link,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { graphql, Link as GatsbyLink } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
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
  pageContext,
}: {
  data: BlogPostBySlugQuery;
  location: any;
  pageContext: { previous: any; next: any };
}) {
  const post = data.markdownRemark;
  const { previous, next } = pageContext;

  return (
    <>
      <Title title={post?.frontmatter?.title ?? "Post"} />
      <Layout>
        <Container
          as="article"
          itemScope
          itemType="http://schema.org/Article"
          overflowX="auto"
          my={12}
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
                post.frontmatter.featuredImage.childImageSharp.gatsbyImageData
              }
              alt={post?.frontmatter?.title ?? "No description"}
            />
          ) : undefined}
          <header>
            <Heading as="h1" itemProp="headline">
              {post?.frontmatter?.title}
            </Heading>
            <time
              itemProp="datePublished"
              dateTime={post?.frontmatter?.rawDate}
            >
              {post?.frontmatter?.date}
            </time>
            <p>
              by <span itemProp="author">{post?.frontmatter?.author}</span>
            </p>
          </header>
          <main>{renderAst(post?.htmlAst)}</main>
          <Divider />
          <chakra.nav mt={4}>
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
                {previous?.frontmatter?.slug && (
                  <Link
                    as={GatsbyLink}
                    to={`/blog/${previous.frontmatter.slug}`}
                    rel="prev"
                  >
                    ← {previous?.frontmatter?.title}
                  </Link>
                )}
              </li>
              <li>
                {next?.frontmatter?.slug && (
                  <Link
                    as={GatsbyLink}
                    to={`/blog/${next.frontmatter.slug}`}
                    rel="next"
                  >
                    {next?.frontmatter?.title} →
                  </Link>
                )}
              </li>
            </ul>
          </chakra.nav>
        </Container>
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
        rawDate: date
        description
        author
        featuredImage {
          childImageSharp {
            gatsbyImageData(width: 700)
          }
        }
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
