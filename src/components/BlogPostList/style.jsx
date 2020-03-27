import styled from 'styled-components'
import { Link } from 'gatsby'
import React from 'react'
import defaultTheme from '../Theme'
import { h3 } from '../Typography'

export const BlogPostList = styled.ul`
    margin: 0;
    padding-left: 0;
    list-style-type: none;
`

export const BlogPostLink = styled(props => <Link {...props} />)`
    color: inherit;
    text-decoration: none;
    display: block;
    padding-top: ${ defaultTheme.space[4] };
    padding-right: ${ defaultTheme.space[5] };
    padding-bottom: ${ defaultTheme.space[4] };
    padding-left: ${ defaultTheme.space[5] };
    margin-top: ${defaultTheme.space[0] };
    margin-bottom: ${defaultTheme.space[0] };
    border-radius: ${ defaultTheme.borderRadius[1] };

    &:hover {
        background: ${ (props) => props.theme.bg.secondary };
    }
`

export const BlogPostTitle = styled.h3`
    margin-top: ${ defaultTheme.space[0] };
    margin-bottom: ${ defaultTheme.space[1] };
    ${ h3 }
`
export const BlogPostDate = styled.p`
    font-size: ${ defaultTheme.fontSizes[0] };
    margin-top: ${ defaultTheme.space[1] };
    margin-bottom: ${ defaultTheme.space[2] };
    color: ${ (props) => props.theme.text.secondary };
`

export const BlogPostExcerpt = styled.p`
    margin-top: ${ defaultTheme.space[2] };
    margin-bottom: ${ defaultTheme.space[2] };
`

export const ContinueButton = styled.div`
    display: flex;
    margin: ${ defaultTheme.space[0] };
    padding: ${ defaultTheme.space[0] };
    border: none;
    background-color: transparent;
    font-size: ${ defaultTheme.fontSizes[0] };
    color: ${ (props) => props.theme.text.accent };
    
    &:hover {
    }
`