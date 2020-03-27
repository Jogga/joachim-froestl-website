import React from "react"
import { graphql, Link } from "gatsby"
import Page from "../../components/Page"
import Layout from '../../components/Layout'
import BlogPostList from '../../components/BlogPostList'
import { H1 } from '../../components/Typography'
import defaultTheme from '../../components/Theme'

export default class BlogList extends React.Component {
    render() {
        const posts = this.props.data.allMarkdownRemark
        const { currentPage, numPages } = this.props.pageContext
        const isFirst = currentPage === 1
        const isLast = currentPage === numPages
        const newerPosts = currentPage - 1 === 1 ? "/blog/" : "/blog/"+(currentPage - 1).toString()
        const olderPosts = "/blog/"+(currentPage + 1).toString()

        return (
            <Page>
                <Layout.Padded>
                    <H1 style={{ marginBottom: defaultTheme.space[3] }}>Blog</H1>
                </Layout.Padded>
                <BlogPostList posts={posts} />
                {/*
                <Layout.Padded>
                    <p>{ currentPage } / { numPages }</p>
                    {!isFirst &&
                        <Link to={newerPosts} rel="prev">Newer Posts</Link>
                    }
                    {!isLast &&
                        <Link to={olderPosts} rel="next">Older Posts</Link>
                    }
                </Layout.Padded>
                */}
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
                    excerpt
                    fields {
                        slug
                    }
                }
            }
        }
    }
`