import { createGlobalStyle } from "styled-components"
import defaultTheme from "../Theme"

const ResetStyles = createGlobalStyle`
    html {
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        font-family: ${ defaultTheme.fonts.body };
        line-height: ${ defaultTheme.lineHeights.body };
        background-color: ${(props) => props.theme.bg.primary};
        color: ${(props) => props.theme.text.primary};
        font-size: 18px;
    }
    body {
        margin: 0;
    }
`
export default ResetStyles