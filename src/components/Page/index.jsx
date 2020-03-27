import React from "react"
import { Footer } from "../Footer"
import { Header } from "../Header"
import Providers from "../Providers"
import Layout from "../Layout"

export default function Page ({ children }) {
    return (
        <Providers>
            <Layout.Centered>
                <Header />
                {children}
                <Footer />
            </Layout.Centered>
        </Providers>
    )
}
