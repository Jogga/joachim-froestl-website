import React from "react"
import { Footer } from "../Footer"
import { Header } from "../Header"
import { CenteredContainer } from "../Layout"
import GlobalStyles from '../GlobalStyles'
import SEO from './SEO'
import DarkMode from './DarkMode'

export default function Page ({ children, seo }) {
    return (
        <>
            <SEO 
                title={seo.title} 
                path={seo.path} 
                description={seo.description} />
            <DarkMode>
            <GlobalStyles.ResetStyles />
                <CenteredContainer>
                    <Header />
                    {children}
                    <Footer />
                </CenteredContainer>
            </DarkMode>
        </>
    )
}
