import React from "react"
import { Footer } from "../Footer"
import { Header } from "../Header"
import Providers from "../Providers"
import { CenteredContainer } from "../Layout"

export default function Page ({ children }) {
    return (
        <Providers>
            <CenteredContainer>
                <Header />
                {children}
                <Footer />
            </CenteredContainer>
        </Providers>
    )
}
