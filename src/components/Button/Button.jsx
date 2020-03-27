import React from "react"
import { Button } from './style'

export default function Btn (props) {
    const { children } = props
    return <Button { ...props }>{children}</Button>
  }