import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import { StaticQuery, graphql } from "gatsby";

const IndexPage = () => (
  <Layout>
    <h1>Hi there</h1>
    <p>Welcome to my personal site!</p>
    <StaticQuery
      query={graphql`
        query BlogPostQuery {
          allMarkdownRemark(
            filter: { frontmatter: { published: { eq: true } } }
          ) {
            edges {
              node {
                id
                frontmatter {
                  path
                  title
                  date
                }
                excerpt
                timeToRead
                html
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <ul>
            {data.allMarkdownRemark.edges.map(edge => {
              return (
                <li key={edge.node.id}>
                  <span>
                    {edge.node.frontmatter.date} </span>
                  <Link to={edge.node.frontmatter.path}>
                    {edge.node.frontmatter.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        );
      }}
    />
  </Layout>
);

export default IndexPage;
