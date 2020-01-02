import React from "react"
import { Link, graphql } from "gatsby"

export default ({ data }) => {
    const posts = data.allMarkdownRemark
    return (
        <div>
            <h1>Hello world!</h1>
            <h2>Blog Posts</h2>
            <ul>
                {posts.edges.map(({ node }) => (
                    <li key={ node.slug }>
                        <Link to={ node.fields.slug }>
                            { node.frontmatter.title }
                        </Link>
                    </li>
                ))}
            </ul>
            {posts.totalCount > 3 &&
                <Link to="/blog">More</Link>
            }
        </div>
    )
}

export const query = graphql`
    query {
        allMarkdownRemark(
                sort: { fields: [frontmatter___date], order: DESC }
                limit: 3
            ) {
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