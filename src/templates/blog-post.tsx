import { Container, Heading, Link } from "@chakra-ui/react";
import { graphql, Link as GatsbyLink } from "gatsby";
import React from "react";
import { Layout } from "../components/Layout";
import Title from "../components/Title";
import { BlogPostBySlugQuery } from "../graphql";

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
          <section
            dangerouslySetInnerHTML={{ __html: post?.html ?? "" }}
            itemProp="articleBody"
          />
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
      html
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
