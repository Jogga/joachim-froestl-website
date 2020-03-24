import React from "react"
import { Footer } from "../Footer"
import { Nav } from "../Nav"

export function Page ({ children }) {
    return (
        <div style={{margin: `1rem auto`, maxWidth: 650}}>
            <Nav />
            {children}
            <Footer />
        </div>
    )
}