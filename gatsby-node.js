const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if(node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath:`pages`})
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })
    }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions
    const result = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)
    if (result.error) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }
    const posts = result.data.allMarkdownRemark.edges
    const postsPerPage = 6
    const numPages = Math.ceil(posts.length / postsPerPage)

    // Create Blog Post List Pages
    Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
            path: i === 0 ? `/blog` : `/blog/${i + 1}`,
            component: path.resolve("./src/templates/BlogList/index.jsx"),
            context: {
                limit: postsPerPage,
                skip: postsPerPage * i,
                numPages,
                currentPage: i + 1
            }
        })
    })

    // Create Blog Post Detail Pages
    posts.forEach(({ node }) => {
        createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/BlogPost/index.jsx`),
            context: {
                slug: node.fields.slug,
            },
        })
    })
}