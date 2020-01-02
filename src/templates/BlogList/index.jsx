import React from "react"
import { graphql, Link } from "gatsby"

export default class BlogList extends React.Component {
    render() {
        const posts = this.props.data.allMarkdownRemark.edges
        const { currentPage, numPages } = this.props.pageContext
        const isFirst = currentPage === 1
        const isLast = currentPage === numPages
        const prevPage = currentPage - 1 === 1 ? "/blog/" : "/blog/"+(currentPage - 1).toString()
        const nextPage = "/blog/"+(currentPage + 1).toString()

        return (
            <div>
                <h1>Blog</h1>
                <p>{ currentPage } / { numPages }</p>
                <ul>
                    { posts.map(({ node }) => (
                    <li>
                        <Link to={ node.fields.slug }>{ node.frontmatter.title }</Link>
                    </li>
                    ))}
                </ul>
                {!isFirst &&
                    <Link to={prevPage} rel="prev">←</Link>
                }
                {!isLast &&
                    <Link to={nextPage} rel="next">→</Link>
                }
            </div>
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