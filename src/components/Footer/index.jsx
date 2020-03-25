import React from "react"
import { Container, SocialLinks, SocialLink, LegalLink } from "./style"

export function Footer() {
    return (
        <Container>
            <LegalLink to="/imprint/">Copyright © 2020 Joachim Fröstl</LegalLink>
            <SocialLinks>
                <li>
                    <SocialLink href="https://twitter.com/joggaf">Twitter</SocialLink>
                </li>
                <li>
                    <SocialLink href="https://linkedin.com/in/jogga">LinkedIn</SocialLink>
                </li>
                <li>
                    <SocialLink href="https://github.com/jogga">Github</SocialLink>
                </li>
            </SocialLinks>
        </Container>
    )
}