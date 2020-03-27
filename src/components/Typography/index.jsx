import styled, { css } from 'styled-components'
import defaultTheme from '../Theme'

const heading = css`
    line-height: ${defaultTheme.lineHeights.heading};
    font-weight: ${ defaultTheme.fontWeights.heading };
`

export const h1 = css`
    ${ heading }
    margin-bottom: ${ defaultTheme.space[5] };
`

export const H1 = styled.h1`
    ${ h1 }
`

export const h2 = css`
    ${ heading }
`

export const H2 = styled.h2`
    ${ h2 }
`

export const h3 = css`
    ${ heading }
`

export const H3 = styled.h3`
    ${ h3 }
`