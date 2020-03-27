import React from 'react'
import { BlogPostList, BlogPostLink, BlogPostTitle, BlogPostDate, BlogPostExcerpt, ContinueButton } from './style'

export default function BlogPosts(props) {
    const { posts } = props
    return(
        <BlogPostList>
            {posts.edges.map(({ node }) => (
                <li key={ node.fields.slug }>
                    <BlogPostLink to={ node.fields.slug }>
                        <BlogPostTitle>
                            { node.frontmatter.title }
                        </BlogPostTitle>
                        <BlogPostDate>
                            <time>{ node.frontmatter.date }</time>
                        </BlogPostDate>
                        <BlogPostExcerpt>
                            { node.excerpt }
                        </BlogPostExcerpt>
                        <ContinueButton>
                            <div>Continue</div>
                        </ContinueButton>
                    </BlogPostLink>
                </li>
            ))}
        </BlogPostList>
    )
}