import React from "react"
import { Footer } from "../Footer"
import { Header } from "../Header"
import { Wrapper, Reset } from "./style"

export function Page ({ children }) {
    return (
        <Wrapper>
            <Reset />
            <Header />
            {children}
            <Footer />
        </Wrapper>
    )
}