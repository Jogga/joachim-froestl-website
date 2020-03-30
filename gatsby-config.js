/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Joachim Fröstl`,
    description: `I’m a product designer solving complex problems through curiosity, empathy, and craft.`,
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
    `gatsby-transformer-remark`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
  ],
}
