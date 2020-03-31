import React from "react"
import { Container, HomeLink } from "./style"

export function Header() {
    return(
        <Container>
            <HomeLink to="/">Joachim Fröstl</HomeLink>
            {/*
            <NavLinks>
                <li>
                    <InactiveLink>About</InactiveLink>
                </li>
                <li>
                    <InactiveLink>Work</InactiveLink>
                </li>
                <li>
                    <Link 
                        to="/blog/"
                        activeClassName="link-active"
                        partiallyActive={true}>Blog</Link>
                </li>
            </NavLinks>
            */}
        </Container>
    )
}