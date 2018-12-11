import React from 'react'
import '../css/footer.css'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">

                <div className="social-connectors">
                    <a href="https://www.instagram.com/wholesomenomad">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://github.com/ollagada">
                        <i className="fab fa-github"></i>
                    </a>
                        <a href="https://www.linkedin.com/in/seungjin-youn-609a06152/">
                            <i class="fab fa-linkedin-in"></i>
                        </a>

                </div>

            </div>

        )
    }

}
export default Footer