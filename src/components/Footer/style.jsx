import styled, { css } from "styled-components"
import defaultTheme from "../Theme"
import React from "react"
import { Link } from "gatsby"
import { paddedContainer } from '../Layout'

export const Container = styled.footer`
    ${ paddedContainer };
    padding-top: ${ defaultTheme.space[6] };
    padding-bottom: ${ defaultTheme.space[4] };
    display: flex;
    position: relative;
    justify-content: space-between;
    font-size: ${ defaultTheme.fontSizes[0] };
`
export const SocialLinks = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;

    li {
        margin-left: ${ defaultTheme.space[5] };
    }
`

const baseLink = css`
    text-decoration: none;
    color: ${ (props) => props.theme.text.secondary };

    &:hover {
        color: ${ (props) => props.theme.text.accent };
    }
`

export const SocialLink = styled.a`
    ${ baseLink }
`

export const LegalLink = styled(props => <Link {...props} />)`
    ${ baseLink }
`