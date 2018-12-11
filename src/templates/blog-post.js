import {graphql} from 'gatsby';
import React from "react";
// import TalkyardCommentsIframe from '@debiki/gatsby-plugin-talkyard';
import Footer from '../components/Footer';
import '../css/blog-post.css'
import '../css/font.css';
import BackPageButton from '../components/backPageButton';
import DisqusThread from '../components/disqusThread.js';

export default({data}) => {

    const {markdownRemark: post} = data;
    console.log("blog-posts.data" + JSON.stringify(data));
    console.log("blog-posts" + post);
    return (
        <div>

            <BackPageButton/>

            <div className="post-title">
                <img src={post.frontmatter.thumbnail}/>

                <div className="post-title-text">
                    <h1>{post.frontmatter.title}</h1>
                    {/* <p>{post.frontmatter.tags}</p> */}
                    <p>{post.frontmatter.date}</p>
                </div>
            </div>
            <div className="blog-wrapper">
                <div
                    id="article"
                    className="blog-post-body"
                    dangerouslySetInnerHTML={{
                    __html: post.html
                }}/>
                {/* <TalkyardCommentsIframe/> */}

                <DisqusThread
                    id={data.markdownRemark.id}
                    title={post.frontmatter.title}
                    path={data.markdownRemark.fields.slug}/>

            </div>

            <Footer/>

        </div>
    );
}

export const query = graphql `
query($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      id
    fields{
      slug
    }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        thumbnail
        tags
      }
    }
  }
  `