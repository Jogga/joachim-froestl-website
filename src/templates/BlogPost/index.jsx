import React from "react"
import { graphql } from "gatsby"
import Page from "../../components/Page"
import { WithMarkdownStyles } from '../../components/GlobalStyles'
import { PaddedContainer } from '../../components/Layout'

export default ({ data }) => {
    const post = data.markdownRemark
    return (
        <Page>
            <PaddedContainer>
                <h1>{ post.frontmatter.title }</h1>
                <WithMarkdownStyles>
                    <div dangerouslySetInnerHTML={{ __html: post.html }} />
                </WithMarkdownStyles>
            </PaddedContainer>
        </Page>
    )
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
            }
        }
    }
`