import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import React, {Component} from 'react';
import {Link} from 'gatsby';
import {Navigation, Header} from 'react-mdl';
import '../css/Navigator.css';

class Navi extends Component {
    logo() {
        return (
            <div className="logo monoton blink">
                <Link to="/" replace><p>Ollagada</p></Link>
            </div>
        );
    }

    render() {
        return (
            <div>
                <Header
                    id="nav"
                    title={this.logo()}
                    scroll
                    className="color-primary railway shadow hide-top">
                    <Navigation className="">
                        <Link to="/blog" className="link-hover-effect" replace>Blog</Link>
                        <Link className="link-hover-effect" to="/portfolio" replace>Portfolio</Link>
                    </Navigation>
                 </Header>
            </div>
        );
    }

}
export default Navi;