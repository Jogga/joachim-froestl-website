import { createGlobalStyle } from "styled-components"
import defaultTheme from "../Theme"

const ResetStyles = createGlobalStyle`
    html {
        font-family: ${ defaultTheme.fonts.body };
    }
    body {
        margin: 0;
    }
`
export default ResetStyles