import styled, { css } from 'styled-components'
import defaultTheme from '../Theme'

const heading = css`
    line-height: ${defaultTheme.lineHeights.heading};
    font-weight: ${ defaultTheme.fontWeights.heading };
`

export const h1 = css`
    ${ heading };
    margin-top: ${ defaultTheme.space[7] };
    margin-bottom: ${ defaultTheme.space[3] };
    font-size: ${ defaultTheme.fontSizes[5] };
`

export const H1 = styled.h1`
    ${ h1 };
`

export const h2 = css`
    ${ heading };
    margin-top: ${ defaultTheme.space[6] };
    margin-bottom: ${ defaultTheme.space[4] };
    font-size: ${ defaultTheme.fontSizes[4] };
`

export const H2 = styled.h2`
    ${ h2 };
`

export const h3 = css`
    ${ heading };
    margin-top: ${ defaultTheme.space[5] };
    margin-bottom: ${ defaultTheme.space[3] };
    font-size: ${ defaultTheme.fontSizes[3] };
`

export const H3 = styled.h3`
    ${ h3 };
`

export const h4 = css`
    ${ heading };
    margin-top: ${ defaultTheme.space[4] };
    margin-bottom: ${ defaultTheme.space[2] };
    font-size: ${ defaultTheme.fontSizes[2] };
`

export const H4 = styled.h4`
    ${ h4 };
`

export const h5 = css`
    ${ heading };
    margin-top: ${ defaultTheme.space[4] };
    margin-bottom: ${ defaultTheme.space[2] };
    font-size: ${ defaultTheme.fontSizes[1] };
`

export const H5 = styled.h5`
    ${ h5 };
`

export const h6 = css`
    ${ heading };
    margin-top: ${ defaultTheme.space[4] };
    margin-bottom: ${ defaultTheme.space[2] };
    font-size: ${ defaultTheme.fontSizes[1] };
    font-weight: ${ defaultTheme.fontWeights.body };
    font-style: italic;
`

export const H6 = styled.h6`
    ${ h6 };
`

export const p = css`
    font-size: ${ defaultTheme.fontSizes[1] };
    font-weight: ${ defaultTheme.fontWeights.body };
    line-height: ${ defaultTheme.lineHeights.body };
    color: ${ (props) => props.theme.text.primary };
    margin-top: ${ defaultTheme.space[0] };
    margin-bottom: ${ defaultTheme.space[3] };

    a {
        color: ${ (props) => props.theme.text.accent };
        &:hover {
            color: ${ (props) => props.theme.text.accentActive };
        }
    }
`

export const P = styled.p`
    ${ p };
`

export const list = css`
    list-style-position: inside;
    padding-left: ${ defaultTheme.space[0] };
    margin-top: ${ defaultTheme.space[0] };
    margin-bottom: ${ defaultTheme.space[3] };
`

export const ul = css`
    ${ list };
`

export const Ul = styled.ul`
    ${ ul };
`

export const ol = css`
    ${ list };
`

export const Ol = styled.ol`
    ${ ol };
`

export const blockquote = css`
    border-left-width: 3px;
    border-left-style: solid;
    border-left-color: ${ (props) => props.theme.text.secondary };
    color: ${ (props) => props.theme.text.secondary };
    margin-top: ${ defaultTheme.space[0] };
    margin-right: ${ defaultTheme.space[0] };
    margin-bottom: ${ defaultTheme.space[3] };
    margin-left: ${ defaultTheme.space[0] };
    padding-left: ${ defaultTheme.space[3] };

    * {
        color: inherit;
    }
`

export const Blockquote = styled.blockquote`
    ${ blockquote };
`