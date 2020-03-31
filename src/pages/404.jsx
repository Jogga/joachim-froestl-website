import React from 'react'
import Page from '../components/Page'
import { ButtonLink } from '../components/Button'
import { PaddedContainer } from '../components/Layout'
import { H1, P } from '../components/Typography'

export default () => {
    return (
        <Page seo={{}}>
            <PaddedContainer>                
                <H1>Page not found</H1>
                <P>Oops! The page you are looking for has been removed or relocated.</P>
                <ButtonLink to="/">Home</ButtonLink>
            </PaddedContainer>
        </Page>
    )
}