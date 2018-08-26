import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";

export default function Template({ data }) {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <h2>{post.frontmatter.date}</h2>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogPostQueryByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;