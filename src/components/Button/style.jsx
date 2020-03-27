import styled, { css } from 'styled-components'
import defaultTheme from "../Theme"
import { Link } from 'gatsby'
import React from 'react'


const buttonBase = css`
    display: inline-flex;
    padding-top: ${ defaultTheme.space[2] };
    padding-right: ${ defaultTheme.space[4] };
    padding-bottom: ${ defaultTheme.space[2] };
    padding-left: ${ defaultTheme.space[4] };
    border-radius: ${ defaultTheme.borderRadius[0] };
    font-size: ${ defaultTheme.fontSizes[0] };
    border: 2px solid ${ (props) => props.theme.text.accent };
    cursor: pointer;
    text-decoration: none;
    line-height: normal;
    width: auto;
`

const button = css`
    ${ buttonBase }
    background-color: transparent;
    color: ${ (props) => props.theme.text.accent };
    &:hover {
        background-color: ${ (props) => props.theme.bg.accentActive };
        border-color: ${ (props) => props.theme.bg.accentActive };
        color: ${ (props) => props.theme.text.negative };
    }
`
export const Button = styled.button`
    ${ button }
`

export const ButtonLink = styled(props => <Link {...props} />)`
    ${ button }
`

const buttonPrimary = css`
    ${ buttonBase }
    background-color: ${ (props) => props.theme.bg.accent };
    color: ${ (props) => props.theme.text.negative };
    &: hover {
        background-color: ${ (props) => props.theme.bg.accentActive };
        border-color: ${ (props) => props.theme.bg.accentActive };
    }
`

export const ButtonPrimary = styled.button`
    ${ buttonPrimary }
`

export const ButtonPrimaryLink = styled(props => <Link {...props} />)`
    ${ buttonPrimary }
`