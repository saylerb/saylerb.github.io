import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import { StaticQuery, graphql } from "gatsby";
import styles from "./styles.css";

const IndexPage = () => (
  <Layout>
    <p>
      Welcome to my old personal site. How did you get here? Check out my new
      site here: <a href="https://www.saylerb.com">saylerb.com</a>
    </p>
    <StaticQuery
      query={graphql`
        query BlogPostQuery {
          allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: ASC }
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
                  <span>{edge.node.frontmatter.date} </span>
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
