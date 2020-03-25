import styled from "styled-components"
import defaultTheme from '../Theme'

export const Container = styled.footer`
    background-color: #efefef;
    padding-top: ${ defaultTheme.space[4] };
    padding-bottom: ${ defaultTheme.space[5] };
    padding-left: ${ defaultTheme.space[3] };
    padding-right: ${ defaultTheme.space[3] };
    display: flex;
`