import React from "react"
import { Link } from "gatsby"

export function Footer() {
    return (
        <div>
            (c) 2020 Joachim Fröstl
            <Link to="/imprint">imprint</Link>
            <a href="https://twitter.com/joggaf">Twitter</a>
            <a href="https://linkedin.com/in/jogga">LinkedIn</a>
            <a href="https://github.com/jogga">Github</a>
        </div>
    )
}