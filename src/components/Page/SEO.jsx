import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, title, path }) {
    const { site } = useStaticQuery(
      graphql`
        query {
          site {
            siteMetadata {
              title
              description
              author
              keywords
              siteUrl
              lang
            }
          }
        }
      `
    )
    const metaDescription = description || site.siteMetadata.description
    const metaLang = site.siteMetadata.lang || `en`
    const canonical = path ? `${ site.siteMetadata.siteUrl }${ path }` : null

    return (
        <Helmet
            htmlAttributes={{
                metaLang
            }}
            defaultTitle={ site.siteMetadata.title }
            title={ title }
            titleTemplate={`%s - ${ site.siteMetadata.title }`}
            link={
              canonical
                ? [
                    {
                      rel: "canonical",
                      href: canonical,
                    },
                  ]
                : []
            }
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    name: `keywords`,
                    content: site.siteMetadata.keywords.join(","),
                },
            ]}
        />
    )   
}

SEO.defaultProps = {
    title: ``,
    description: ``,
}

export default SEO