import React from "react"
import { graphql, Link } from "gatsby"
import { Page } from "../../components/Page"

export default class BlogList extends React.Component {
    render() {
        const posts = this.props.data.allMarkdownRemark.edges
        const { currentPage, numPages } = this.props.pageContext
        const isFirst = currentPage === 1
        const isLast = currentPage === numPages
        const newerPosts = currentPage - 1 === 1 ? "/blog/" : "/blog/"+(currentPage - 1).toString()
        const olderPosts = "/blog/"+(currentPage + 1).toString()

        return (
            <Page>
                <h1>Blog</h1>
                <p>{ currentPage } / { numPages }</p>
                <ul>
                    { posts.map(({ node }) => (
                    <li>
                        <Link to={ node.fields.slug }>{ node.frontmatter.title }</Link>
                    </li>
                    ))}
                </ul>
                <div>
                    {!isFirst &&
                        <Link to={newerPosts} rel="prev">Newer Posts</Link>
                    }
                    {!isLast &&
                        <Link to={olderPosts} rel="next">Older Posts</Link>
                    }
                </div>
            </Page>
        )
    }
}

export const blogListQuery = graphql`
    query blogListQuery($skip: Int!, $limit: Int!) {
        allMarkdownRemark(
            limit: $limit
            skip: $skip
            sort: { fields: [ frontmatter___date ], order: DESC }
        ) {
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
`