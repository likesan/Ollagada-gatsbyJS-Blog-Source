import React from 'react';
import Navi from '../components/navigator';
import InstagramPosts from '../components/instagramPosts';
import {graphql, Link} from "gatsby"
import '../css/Blog.css';

const InstaComponent = (nextProps, nextState) => {
    return (<InstagramPosts/>);
};


const blog = ({data}) => {

    console.log(data);

    return (
        <div id="blog-wrapper">


            <Navi/>
            <div id="wrapper">
                <h1>Post</h1>
                <div className="experiences">
                    {data
                        .allMarkdownRemark
                        .edges
                        .map(({node}) => (
                            <Link to={node.fields.slug} key={node.id}>
                                <div className="post-wrapper">
                                    <img src={node.frontmatter.thumbnail} className="img-pic blur"/>
                                    <div className="post-info">
                                        <span className="post-header">{node.frontmatter.title}</span>
                                        <br/>
                                        <span className="post-date">{node.frontmatter.date}</span>
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
            date(formatString: "MMMM DD, YYYY")
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