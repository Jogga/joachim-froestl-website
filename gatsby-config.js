/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Joachim Fröstl, Product Designer`,
    description: `I’m a Berlin based product designer solving complex problems through curiosity, empathy, and craft.`,
    author: `Joachim Fröstl`,
    keywords: [`Product Design`, `UX`, `UI`, `Web`, `App`, `UX Research`, `Human centered design`, `User Experience`, `Berlin`],
    siteUrl: `https://joachimfroestl.com/`,
    lang: `en`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-fathom`,
      options: {
        siteId: process.env.FATHOM_SITE_ID,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
  ],
}
