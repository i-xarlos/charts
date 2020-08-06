import React from 'react'
import Layout from '../../components/layout/layout.component'
import { Link, graphql, useStaticQuery } from 'gatsby'

export default function Posts() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const {
    allMarkdownRemark: { edges },
  } = data

  return (
    <Layout>
      <h1>Posts</h1>
      <p>List Prices</p>
      <ol>
        {edges.map(edge => (
          <li>
            <h2>{edge.node.frontmatter.title}</h2>
            <p>{edge.node.frontmatter.date || ''}</p>
            <Link to={`/blog/${edge.node.fields.slug}`}>View more</Link>
          </li>
        ))}
      </ol>
    </Layout>
  )
}
