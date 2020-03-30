import styled, { css } from 'styled-components'
import defaultTheme from '../Theme'

export const centeredContainer = css`
    max-width: 640px;
    margin-left: auto;
    margin-right: auto;
`
export const CenteredContainer = styled.div`
    ${ centeredContainer };
`
export const paddedContainer = css`
    padding-right: ${ defaultTheme.space[3] };
    padding-left: ${ defaultTheme.space[3] };
    @media (min-width: ${ defaultTheme.breakPoints[0] }) {
        padding-right: ${ defaultTheme.space[5] };
        padding-left: ${ defaultTheme.space[5] };
    }
`
export const PaddedContainer = styled.div`
    ${ paddedContainer };
`