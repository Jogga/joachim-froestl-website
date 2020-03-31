import React from "react"
import { graphql } from "gatsby"
import Page from "../../components/Page"
import { WithMarkdownStyles } from '../../components/GlobalStyles'
import { PaddedContainer } from '../../components/Layout'

class BlogPostTemplate extends React.Component {
    render() {
        const post = this.props.data.markdownRemark
        const seo = {
            title: post.frontmatter.title,
            path: this.props.location.pathname,
            description: post.excerpt,
        }
        return (
            <Page seo={seo}>
                <PaddedContainer>
                    <h1>{ post.frontmatter.title }</h1>
                    <WithMarkdownStyles>
                        <div dangerouslySetInnerHTML={{ __html: post.html }} />
                    </WithMarkdownStyles>
                </PaddedContainer>
            </Page>
        )
    }
}

export default BlogPostTemplate

export const pageQuery = graphql`
    query BlogPostBySlug($slug: String!) {
        site {
            siteMetadata {
                title
                author
            }
        }
        markdownRemark(fields: { slug: { eq: $slug } }) {
            id
            excerpt(pruneLength: 160)
            html
            frontmatter {
                title
            }
        }
    }
`