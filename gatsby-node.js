const path = require(`path`)
const {createFilePath} = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({node, getNode, actions}) => {
    const {createNodeField} = actions
    if (node.internal.type === `MarkdownRemark`) {

        const fileNode = getNode(node.parent)

        console.log(`\n`, createFilePath({node, getNode, basePath: `pages/posts`}))
        console.log(`\n`, fileNode.relativePath)

        const slug = createFilePath({node, getNode, basePath: `pages/posts`})
        createNodeField({node, name: `slug`, value: slug})
    }
}

exports.createPages = ({graphql, actions}) => {
    const {createPage} = actions;

    const blogPostTemplate = path.resolve("src/templates/blog-post.js")
    const tagTemplate = path.resolve("src/templates/tags.js")

    return new Promise((resolve, reject) => {
        graphql(`
        {
            allMarkdownRemark {
              edges {
                node {
                  html
                  id
                  frontmatter {
                    title
                    tags
                    thumbnail
                  }
                  fields {
                    slug
                  }
                }
              }
            }
          }
                    
      `).then(result => {
            console.log(JSON.stringify(result, null, 4))
            result
                .data
                .allMarkdownRemark
                .edges
                .forEach(({node}) => {
                    createPage({
                        path: node.fields.slug,
                        component: blogPostTemplate,
                        context: {
                            slug: node.fields.slug,
                            thumbnail: node.fields.thumbnail
                        }
                    })
                })
            resolve()
        })
    })

    // Tag pages:
    let tags = []
    // Iterate through each post, putting all found tags into `tags`
    _.each(posts, edge => {
        if (_.get(edge, "node.frontmatter.tags")) {
            tags = tags.concat(edge.node.frontmatter.tags)
        }
    })
    // Eliminate duplicate tags
    tags = _.uniq(tags)

    // Make tag pages
    tags.forEach(tag => {
        createPage({
            path: `/tags/${_.kebabCase(tag)}/`,
            component: tagTemplate,
            context: {
                tag
            }
        })
    })

}