import React from "react"
import PropTypes from "prop-types"

export default class HTML extends React.Component {

    render() {
        return (
            <html {...this.props.htmlAttributes}>
                <head>
                    <meta charSet="utf-8"/>
                    <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1, shrink-to-fit=no"/> {this.props.headComponents}

                    <link
                        rel="stylesheet"
                        href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"/>

                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
                    <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.9"></script>
                    <link
                        rel="stylesheet"
                        href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"/>
                    <script
                        src="https://cdnjs.cloudflare.com/ajax/libs/prop-types/15.6.0/prop-types.js"></script>
                    <script>
                        talkyardServerUrl = 'https://ollagada.talkyard.net';
                    </script>
                    <script async defer src="https://cdn.talkyard.net/-/talkyard-comments.min.js"></script>
                </head>
                <body {...this.props.bodyAttributes}>
                    {this.props.preBodyComponents}
                    <div
                        key={`body`}
                        id="___gatsby"
                        dangerouslySetInnerHTML={{
                        __html: this.props.body
                    }}/> {this.props.postBodyComponents}
                </body>
            </html>
            ) } } HTML.propTypes = {htmlAttributes : PropTypes.object,
            headComponents : PropTypes.array,
            bodyAttributes : PropTypes.object,
            preBodyComponents : PropTypes.array,
            body : PropTypes.string,
            postBodyComponents : PropTypes.array
}