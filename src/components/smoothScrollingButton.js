import React from 'react';
import '../css/smoothScrollingButton.css';

const smoothScrollingButton = () => {

    function scrollDisappear(){
        window.scroll(function(){
        if(this.scrollTop() > 700){
            document.getElementById("smoothScrollingButton").style.display ="block";
        }
    })
    }
    return (
        <div>
            <div className="smoothScrollingButton">
                <a href="#article" onclick={scrollDisappear()}>
                    <i class="fas fa-angle-down"></i>
                </a>
            </div>
        </div>
    )
}

export default smoothScrollingButton;