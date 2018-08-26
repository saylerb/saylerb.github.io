import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import { StaticQuery, graphql } from "gatsby";

const IndexPage = () => (
  <Layout>
    <h1>Hi there</h1>
    <p>Welcome to my personal site. Blog posts coming soon:</p>
    <StaticQuery
      query={graphql`
        query BlogPostQuery {
          allMarkdownRemark {
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
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
