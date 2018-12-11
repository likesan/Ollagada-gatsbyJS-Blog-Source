module.exports = {
    // pathPrefix : '/ollagada.github.io',
    siteMetadata: {
        title: 'Ollagada Blog',
        siteUrl: `https://www.ollagada.go`
    },
    plugins: [
        'gatsby-transformer-remark', {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `posts`,
                path: `${__dirname}/src/pages/posts`
            }
        },
        'gatsby-plugin-react-helmet', {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: 'gatsby-starter-default',
                short_name: 'starter',
                start_url: '/',
                background_color: '#663399',
                theme_color: '#663399',
                display: 'minimal-ui',
                icon: 'src/img/gatsby-icon.png', // This path is relative to the root of the site.
            }
        },
        'gatsby-plugin-offline', {
            resolve: `@debiki/gatsby-plugin-talkyard`,
            options: {
                talkyardServerUrl: 'https://ollagada.talkyard.net'
            }
        }
    ]
}