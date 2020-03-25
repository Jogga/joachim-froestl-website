import React from "react"
import { Link } from "gatsby"
import { Container } from "./style"

export function Footer() {
    return (
        <Container>
            <p><Link to="/imprint/">© 2020 Joachim Fröstl</Link></p>
            <ul>
                <li>
                    <a href="https://twitter.com/joggaf">Twitter</a>
                </li>
                <li>
                    <a href="https://linkedin.com/in/jogga">LinkedIn</a>
                </li>
                <li>
                    <a href="https://github.com/jogga">Github</a>
                </li>
            </ul>
            <button>Up</button>
        </Container>
    )
}