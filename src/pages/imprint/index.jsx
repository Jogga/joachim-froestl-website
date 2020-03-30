import React from "react"
import Page from "../../components/Page"
import { PaddedContainer } from '../../components/Layout'
import { H1 } from '../../components/Typography'

export default ({ data }) => {
    return (
        <Page seo={{ title: `Imprint`}}>
            <PaddedContainer>
                <H1>Imprint</H1>
                <p>Legal bla bla</p>
            </PaddedContainer>
        </Page>
    )
}