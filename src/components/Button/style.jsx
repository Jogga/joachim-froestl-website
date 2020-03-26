import styled, { css } from 'styled-components'
import defaultTheme from "../Theme"

export const Button = styled.button`
    background-color: blue;
    border-radius: 6px;
    border: none;
    display: flex;
    color: white;
    font-size: ${ defaultTheme.fontSizes[0] };
    padding-top: ${ defaultTheme.space[2] };
    padding-right: ${ defaultTheme.space[4] };
    padding-bottom: ${ defaultTheme.space[2] };
    padding-left: ${ defaultTheme.space[4] };
`