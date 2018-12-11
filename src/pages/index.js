import React from 'react';
import '../css/Animista.css';
import '../css/index.css';
import {Link} from 'gatsby';
import TypedReact from '../lib/typed';
import Spinner from 'react-spinkit';

class IndexPage extends React.Component
{

    state = {
        loading: false
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({loading: true})
        }, 3000)
    }

    loadingScreen = () => {
        return (
            <div
                className="loading"
                style={{
                textAlign: 'center',
                width: '1%',
                margin: 'auto',
                position: 'relative',
                top: '45vh'
            }}>
                <Spinner name='cube-grid' style={{}}/>
            </div>
        );

    }

    homeContents = () => {
        return (
            <div className="fade-in">
                <div id="header" className="home">
                    <div className="container">
                        <div className="header-content">
                            <div className="header-inherited-box"></div>
                            <div className="typed">
                                <h1>
                                    <TypedReact
                                        strings={[
                                        "I'm a Developer.",
                                        "I'm a Traveler.",
                                        "I'm SeungJin YOUN."
                                    ]}/>
                                </h1>

                            </div>
                            <p>Developer, Traveler, Blogger</p>

                            <ul className="list-unstyled list-social">
                                <li>
                                    <a href="https://www.instagram.com/wholesomenomad">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/ollagada">
                                        <i className="fab fa-github"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <span className="scroll-right-button">
                            <Link to="/portfolio" replace>
                                <i className="fas fa-angle-right"></i>
                            </Link>
                        </span>

                    </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.state.loading === false
                    ? this.loadingScreen()
                    : this.homeContents()}
            </div>
        );
    }
};

export default IndexPage
