import React from "react"
import { Link } from "gatsby"

export function Nav() {
    return(
        <nav>
            <Link to="/">Joachim Fröstl</Link>
            <Link to="/about" disabled>About</Link>
            <Link to="/work">Work</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    )
}