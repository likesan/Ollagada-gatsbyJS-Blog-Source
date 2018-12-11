import React, {Component} from 'react';
import '../css/Portfolio.css';
import Navi from '../components/navigator';
import PortfolioCard from '../components/PortfolioCard';
import '../css/Animista.css';
import Spinner from 'react-spinkit';

class Portfolio extends Component{
    state = {
        portfolios: []
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                portfolios: [
                    {
                        id: 0,
                        img: "https://i.imgur.com/YdDvDl8.png",
                        animista: "card scale-in-center ",
                        title: "IT class assistant for student and instructor",
                        explanation: "Java Native Application It offers 3 main functions. First of all, the instructor" +
                                " whom has connected with this application, he can see another connected user's s" +
                                "creen by previously achieved permition. Second, the IT student can jobsearching " +
                                "within a webcrawling search bar. The end of all, they can have a bulletin board " +
                                "what support to communicate by user themselves.",
                        detail: "https://youtu.be/sGvSVWuud5U"
                    }, {
                        id: 1,
                        img: "https://i.imgur.com/PVmSsP7.png",
                        animista: "card scale-in-center ",
                        title: "Grouping Social Platform MEETNOW",
                        explanation: "Java MVC Pattern Web Application",
                        detail: "https://youtu.be/MHJmsCvfwEE"

                    }, {
                        id: 2,
                        img: "https://i.imgur.com/R0TQQtw.png",
                        animista: "card scale-in-center ",
                        title: "Style Share Social Platform ITSO",
                        explanation: "Java Spring Framework Web Application",
                        detail: "https://www.youtube.com/watch?v=DISVdiGOVwE&feature=youtu.be"
                    }
                ]
            });
        }, 2000)
    }

    _renderPortfolios = () => {
        const portfolios = this
            .state
            .portfolios
            .map((portfolio) => {
                return (<PortfolioCard
                    className={portfolio.animista}
                    title={portfolio.title}
                    explanation={portfolio.explanation}
                    key={portfolio.id}
                    detail={portfolio.detail}
                    img={portfolio.img}/>)
            })
        return portfolios;
    };

    render() {
        return (
            <div>
                {this.state.portfolios.length === 0
                    ? <div className="loading"  style={{
                        textAlign: 'center',
                        width: '1%',
                        margin: 'auto',
                        position: 'relative',
                        top: '45vh'}}>
                            <Spinner name='wandering-cubes'/></div>
                    : <div>
                        <Navi/>
                        <div className="show-case">
                            {this._renderPortfolios()}
                        </div>
                    </div>}
            </div>
        );
    }
}


export default Portfolio;   