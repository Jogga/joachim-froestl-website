import React from 'react'
import { graphql } from 'gatsby'
import Page from '../components/Page'
import { ButtonLink, ButtonPrimary } from '../components/Button'
import { PaddedContainer } from '../components/Layout'
import BlogPostList from '../components/BlogPostList'
import { H1, H2 } from '../components/Typography'
import defaultTheme from '../components/Theme'

export default ({ data }) => {
    const posts = data.allMarkdownRemark

    function handleClick(e) {
        console.log('hello there')
        window.location.href = 'mailto:mail@example.org'
    }
    
    return (
        <Page>
            <PaddedContainer style={{ marginBottom: defaultTheme.space[8] }}>                
                <H1 style={{ marginBottom: defaultTheme.space[4] }}>I’m a product designer solving complex problems through curiosity, empathy, and craft.</H1>
                <ButtonPrimary onClick={handleClick}>Reach out</ButtonPrimary>
            </PaddedContainer>
            <PaddedContainer>
                <H2 style={{ marginBottom: defaultTheme.space[1] }}>Articles</H2>
            </PaddedContainer>
            <BlogPostList posts={posts} />
            {posts.totalCount > 3 &&
                <PaddedContainer style={{ marginTop: defaultTheme.space[3], marginBottom: defaultTheme.space[3] }}>
                    <ButtonLink to="/blog">More</ButtonLink>
                </PaddedContainer>
            }
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
                        date(formatString: "MMMM Do, YYYY")
                        title
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