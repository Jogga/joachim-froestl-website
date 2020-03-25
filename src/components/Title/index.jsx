import React from "react"
import { TitleContainer } from "./style"

export function Title({ children }) {
    return(
        <TitleContainer>
            { children }
        </TitleContainer>
    )
}