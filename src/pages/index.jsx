import React from "react"
import { Link, graphql } from "gatsby"
import { Page } from "../components/Page"
import { Title } from "../components/Title"
import { Button } from "../components/Button"

export default ({ data }) => {
    const posts = data.allMarkdownRemark
    return (
        <Page>
            <Title>
                <h1>I’m a product designer solving complex problems through curiosity, empathy, and craft.</h1>
                <Button>Reach out</Button>
            </Title>
            <div>
                <h2>Articles</h2>
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
        </Page>
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