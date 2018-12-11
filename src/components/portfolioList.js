import React, {Component} from 'react';
import '../css/PortfolioList.css';
import PortfolioCard from './PortfolioCard';

class PortfolioList extends Component {
    static defaultProps = {
        data: []
    }

    render() {
        const {data} = this.props;
        const list = data.map( info => (<PortfolioCard key={info.id} info={info}/>));
        return (
            <div className="list-template">
                <div>
                {list}
                </div>
            </div>
        );
    };
}

export default PortfolioList;
