import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
    query SiteTitleQuery {
      site {
        buildTime
        siteMetadata {
          title
          siteUrl
          
        }
      }
    }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Personal Blog & Portfolio for SJ' },
            { name: 'keywords', content: '책,리뷰,개발자,여행,자유,노마드,sj,wholesomenomad,건강,웰빙,비건,채식,영어,언어,소통,개발자,자바,java' },
            { name : 'author', content: 'SeungJin YOUN  '}
          ]}
          
        >
          <html lang="en" />
    

    
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
