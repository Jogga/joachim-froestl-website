import React from "react"
import { Footer } from "../Footer"
import { Header } from "../Header"
import Providers from "../Providers"
import { Wrapper } from "./style"

export function Page ({ children }) {
    return (
        <Providers>
            <Wrapper>
                <Header />
                {children}
                <Footer />
            </Wrapper>
        </Providers>
    )
}