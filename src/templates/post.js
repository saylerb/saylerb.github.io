import React from "react";
import Layout from "../components/layout";
import { graphql, Link } from "gatsby";

export default function Template({ data }) {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <h3>{post.frontmatter.date}</h3>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogPostQueryByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        date
        title
      }
    }
  }
`;
