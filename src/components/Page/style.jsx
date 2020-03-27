import styled from "styled-components"
import defaultTheme from "../Theme"

export const Wrapper = styled.div`
    max-width: 688px;
    margin-left: auto;
    margin-right: auto;
`

export const ContentArea = styled.div`
    padding-right: ${ defaultTheme.space[5] };
    padding-left: ${ defaultTheme.space[5] };
`