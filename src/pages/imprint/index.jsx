import React from "react"
import Page from "../../components/Page"
import { PaddedContainer } from '../../components/Layout'
import { H1, H2, P } from '../../components/Typography'
import { Button } from '../../components/Button'

export default () => {

    function handleClick(e) {
        window.location.href = `mailto:${process.env.GATSBY_CONTACT_EMAIL}`
    }

    return (
        <Page seo={{ title: `Imprint`}}>
            <PaddedContainer>
                <H1>
                    Imprint
                </H1>
                <P>
                    Joachim Fröstl<br />
                    Wilhelm-Stolze-Straße 29<br />
                    10249 Berlin<br />
                    Germany
                </P>
                <P>
                    Do you want to get in touch? Feel free to reach out via email.
                </P>
                <P>
                    <Button onClick={handleClick}>Email me</Button>
                </P>
                <H2>
                    Disclaimer
                </H2>
                <P>
                    The contents of this website are written diligently and according to my best knowledge.
                </P>
                <P>
                    The contents of external websites to which I link are not adopted as my own. I make sure to link to high quality, legal content. I am, however, not in control of the external websites and they might get updated without my knowledge. If you find any content I’m linking to objectionable, please reach out.
                </P>
                <P>
                    All content of this website, especially texts, images, videos, and so forth, are subject to copyright laws.
                </P>
                <H2>
                    Privacy
                </H2>
                <P>
                    To gain insight into how this website is performing, I use <a href="https://usefathom.com/">Fathom Analytics</a>.
                </P>
                <P>
                    Fathom Analytics is website analytics software that tracks and reports aggregate website traffic without compromising on your privacy. Fathom only reports on aggregates, so no information specific to the website visitor is ever tracked or recorded.
                </P>
                <P>
                    You can opt-out of tracking by the Fathom software by enabling "Do Not Track" in your browser settings.
                </P>
            </PaddedContainer>
        </Page>
    )
}