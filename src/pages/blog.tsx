import { Link } from "@chakra-ui/react";
import { graphql, Link as GatsbyLink, useStaticQuery } from "gatsby";
import React from "react";
import { Layout } from "../components/Layout";
import Title from "../components/Title";
import { PostsQuery } from "../graphql";

export default function Blog() {
  const result: PostsQuery = useStaticQuery(graphql`
    query Posts {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        nodes {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  `);
  const posts = result.allMarkdownRemark.nodes;

  return (
    <>
      <Title title="Blog" />
      <Layout>
        <ol style={{ listStyle: `none` }}>
          {posts.map(post => {
            const title = post?.frontmatter?.title || post?.fields?.slug;

            return (
              <li key={post?.fields?.slug}>
                <article
                  className="post-list-item"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <header>
                    <h2>
                      <Link
                        as={GatsbyLink}
                        to={post?.fields?.slug ?? "#"}
                        itemProp="url"
                      >
                        <span itemProp="headline">{title}</span>
                      </Link>
                    </h2>
                    <small>{post?.frontmatter?.date}</small>
                  </header>
                  <section>
                    <p
                      dangerouslySetInnerHTML={{
                        __html:
                          post?.frontmatter?.description || post.excerpt || "",
                      }}
                      itemProp="description"
                    />
                  </section>
                </article>
              </li>
            );
          })}
        </ol>
      </Layout>
    </>
  );
}
