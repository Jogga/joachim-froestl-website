import styled from "styled-components"
import { Link } from "gatsby"
import React from "react"
import defaultTheme from '../Theme'

export const Container = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: ${ defaultTheme.space[3] };
    padding-right: ${ defaultTheme.space[5] };
    padding-bottom: ${ defaultTheme.space[3] };
    padding-left: ${ defaultTheme.space[5] };
`

export const HomeLink = styled(props => <Link {...props} />)`
    color: ${ (props) => props.theme.text.primary };
    text-decoration: none;

    &:hover{
        color: ${ (props) => props.theme.text.accent };
    }
`

export const NavLinks = styled.ul`
    display: flex;
    list-style: none;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;

    li {
        margin-top: 0;
        margin-right: 0;
        margin-bottom: 0;
        margin-left: 2em;
    }
    li:first-child {
        margin-left: 0;
    }

    a {
        color: #222;
        text-decoration: none;
    }
    a[disabled] {
        color: grey;
        pointer-events: none;
    }

    a.link-active {
        color: blue;
    }
`

export const InactiveLink = styled.span`
    color: grey;
    cursor: not-allowed;
`