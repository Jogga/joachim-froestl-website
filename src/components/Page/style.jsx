import styled, { createGlobalStyle } from "styled-components"
import defaultTheme from "../Theme"

export const Reset = createGlobalStyle`
    body {
        margin: 0;
    }
    html {
        font-family: ${ defaultTheme.fonts.body };
    }
`
export const Wrapper = styled.div`
    max-width: 640px;
    padding-left: ${ defaultTheme.space[3] };
    padding-right: ${ defaultTheme.space[3] };
    margin-left: auto;
    margin-right: auto;
`