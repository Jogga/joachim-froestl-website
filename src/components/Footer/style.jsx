import styled, { css } from "styled-components"
import defaultTheme from "../Theme"
import React from "react"
import { Link } from "gatsby"

export const Container = styled.footer`
    padding-top: ${ defaultTheme.space[6] };
    padding-bottom: ${ defaultTheme.space[7] };
    padding-left: ${ defaultTheme.space[0] };
    padding-right: ${ defaultTheme.space[0] };
    display: flex;
    position: relative;
    justify-content: space-between;
`
export const ScrollButton = styled.button`
    position: absolute;
    background: #222;
    color: #eee;
    border: none;
    padding: ${ defaultTheme.space[2] };
    right: ${ defaultTheme.space[2] };
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
    color: #555;
`

export const SocialLink = styled.a`
    ${ baseLink }
`

export const LegalLink = styled(props => <Link {...props} />)`
    ${ baseLink }
`