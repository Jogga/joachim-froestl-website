import React from "react"
import { ButtonLink } from './style'

export default function BtnLink (props) {
    const { children } = props
    return <ButtonLink { ...props }>{children}</ButtonLink>
  }