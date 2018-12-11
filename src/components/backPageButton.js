import React from 'react';
import {Link} from 'gatsby';
import '../css/backPageButton.css';

const backPageButton = () => {

    return (
        <div className="backPageButton">
            <Link to="/blog">
                <i class="fas fa-angle-left"></i>
            </Link>
        </div>
    );
}
export default backPageButton;