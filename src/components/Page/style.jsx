import styled from "styled-components"
import defaultTheme from "../Theme"

export const Wrapper = styled.div`
    max-width: 640px;
    padding-left: ${ defaultTheme.space[3] };
    padding-right: ${ defaultTheme.space[3] };
    margin-left: auto;
    margin-right: auto;
`