import React from "react"
import { Link, graphql } from "gatsby"

export default ({ data }) => {
    const posts = data.allMarkdownRemark
    return (
        <div>
            <h1>Hello world!</h1>
            <h2>{ posts.totalCount } Blog Posts</h2>
            <ul>
                {posts.edges.map(({ node }) => (
                    <li id={ node.id }>
                        <Link to={ node.fields.slug }>
                            { node.frontmatter.title }
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export const query = graphql`
    query {
        allMarkdownRemark {
            totalCount
            edges {
                node {
                    frontmatter {
                        date
                        title
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    }
`