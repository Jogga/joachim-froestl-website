import { createGlobalStyle } from "styled-components"
import defaultTheme from "../Theme"

const ResetStyles = createGlobalStyle`
    html {
        font-family: ${ defaultTheme.fonts.body };
        font-size: 18px;
        background-color: ${(props) => props.theme.bg.primary};
        color: ${(props) => props.theme.text.primary};
    }
    body {
        margin: 0;
    }
`
export default ResetStyles