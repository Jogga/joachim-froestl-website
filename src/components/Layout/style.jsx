import styled from 'styled-components'
import defaultTheme from '../Theme'

export const Centered = styled.div`
    max-width: 640px;
    margin-left: auto;
    margin-right: auto;
`
export const Padded = styled.div`
    padding-right: ${ defaultTheme.space[5] };
    padding-left: ${ defaultTheme.space[5] };
`