import React from 'react';
import Navi from '../components/navigator';
import InstagramPosts from '../components/instagramPosts';
import ShortcutButton from '../components/shortcut-button';

import {graphql, Link} from "gatsby"
import '../css/Blog.css';

const shouldComponentUpdate = (nextProps, nextState) => {
    return (<InstagramPosts/>);
};

const blog = ({data}) => {

    console.log(data);

    return (
        <div id="blog-wrapper">
            <Navi/>
            <ShortcutButton/>

            <div id="instagram-posts">
                <h1>Picture</h1>
                {shouldComponentUpdate()}
            </div>

            <div id="wrapper">
                <h1>Post</h1>
                <div className="experiences">

                    {data
                        .allMarkdownRemark
                        .edges
                        .map(({node}) => (

                            <Link to={node.fields.slug} key={node.id}>
                                <div className="post-wrapper">
                                    <img
                                        src={node.frontmatter.thumbnail} className="img-pic" />
                                        <div className="post-header">{node.frontmatter.title}
                                        <p className="post-date">{node.frontmatter.date}</p>
                                        </div>
                                </div>
                            </Link>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default blog;

export const query = graphql `
{
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
            id
          fields {
            slug
          }
          frontmatter {
            title
            date
            author
            thumbnail
            tags
          }
          excerpt
        }
      }
    }
  }    
`