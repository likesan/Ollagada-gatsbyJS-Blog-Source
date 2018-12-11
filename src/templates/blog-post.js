import {graphql} from 'gatsby'
import React from "react"
import '../css/blog-post.css'
import Navi from '../components/navigator';
import Footer from '../components/Footer'

export default({data}) => {

    const {markdownRemark: post} = data;
    console.log("blog-posts.data" + JSON.stringify(data));
    console.log("blog-posts" + post);
    return (
        <div>
            <Navi/>
            <div className="blog-wrapper">
                <header>
                    <img
                        src={post.frontmatter.thumbnail} />
                </header>

                <div>
                    <h1>{post.frontmatter.title}</h1>
                    <div>{post.frontmatter.tags}</div>
                </div>
                <div
                    className="blog-post-body"
                    dangerouslySetInnerHTML={{
                    __html: post.html
                }}/>

            </div>
            <Footer/>

        </div>
    );
}

export const query = graphql `
query($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
    fields{
      slug
    }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
  `