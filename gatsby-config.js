module.exports = {
    // pathPrefix : '/ollagada.github.io',
    siteMetadata: {
        title: 'SJ personal Blog',
        siteUrl: `https://ollagada.github.io`
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
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
              trackingId: "UA-116676814-1",
              // Puts tracking script in the head instead of the body
              head: false,
              // Setting this parameter is optional
              anonymize: true,
              // Setting this parameter is also optional
              respectDNT: true,
              // Avoids sending pageview hits from custom paths
              exclude: ["/preview/**", "/do-not-track/me/too/"],
              // Enables Google Optimize using your container Id
              optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
              // Any additional create only fields (optional)
              sampleRate: 5,
              siteSpeedSampleRate: 10,
              cookieDomain: "auto",
            },
        }
    ]
}