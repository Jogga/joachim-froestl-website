import React from "react"
import { ButtonPrimary } from './style'

export default function BtnPrimary (props) {
    const { children } = props
    return <ButtonPrimary { ...props }>{children}</ButtonPrimary>
  }