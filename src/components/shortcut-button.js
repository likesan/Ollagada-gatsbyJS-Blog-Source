import React from 'react';
import '../css/shortcutButton.css';

const content = ["PICTURE", "POST"]

const shortcutButton = () => {

    return (
        <div id="shortcut-button">
                <a href="#instagram-posts">{content[0]}</a>
                <a href="#wrapper">{content[1]}</a>
        </div>
    );
}

export default shortcutButton;