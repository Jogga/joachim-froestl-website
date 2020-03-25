import React from "react"
import { Footer } from "../Footer"
import { Header } from "../Header"
import { Reset } from "./style"

export function Page ({ children }) {
    return (
        <div>
            <Reset />
            <Header />
            {children}
            <Footer />
        </div>
    )
}