import React, {Component} from 'react';
import LinesEllipsis from 'react-lines-ellipsis';
import '../css/Animista.css'
import '../css/PortfolioCard.css';

class PortfolioCard extends Component {
    render() {
        console.log(this.props);

        return (
            <div className={this.props.className}>
                <div className="card-header">
                    <div className="logo">
                        <img className="center" src={this.props.img} alt="Portfolio logo"/>
                    </div>

                </div>
                <div className="card-body">
                    <h4>{this.props.title}</h4>
                        <LinesEllipsis
                            text={this.props.explanation}
                            maxLine='1'
                            ellipsis='...'
                            trimRight
                            basedOn='letters'/>
                </div>
                <div className="card-action">
                    <a
                        href={this.props.detail}
                        className="mdl-button mdl-button--icon mdl-color-text--blue-grey-300">
                        <i className="material-icons">
                            videocam
                        </i>
                    </a>
                    <button className="mdl-button mdl-button--icon mdl-color-text--blue-grey-300">
                        <i className="material-icons">favorite</i>
                    </button>
                    <button
                        id="share-post-1"
                        className="mdl-button mdl-button--icon mdl-color-text--blue-grey-300">
                        <i className="material-icons">share</i>
                    </button>
                    <ul className="mdl-menu mdl-menu--top-right mdl-js-menu" htmlFor="share-post-1">
                        <li className="mdl-menu__item">Facebook</li>
                        <li className="mdl-menu__item">Twitter</li>
                        <li className="mdl-menu__item">Pinterest</li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default PortfolioCard;