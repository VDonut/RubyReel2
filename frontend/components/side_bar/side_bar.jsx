import React from 'react';
import { Link } from 'react-router-dom';

class SideBar extends React.Component {

    constructor(props) {
        super(props);

        this.hideSidebar = this.hideSidebar.bind(this);
    }

    hideSidebar() {
        let sideBar = document.getElementById("sidebar-container");
        let videoIndex = document.getElementById("video-index-container");
        let smallSideBar = document.getElementById("small-sidebar-container");
        smallSideBar.classList.remove("hide");
        sideBar.classList.add("hide");
        videoIndex.classList.add("extend");
    }

    render() {
        return (
            <section id="sidebar-container" className="hide">
                <div id="sidebar-title">
                    <button onClick={this.hideSidebar} id="sidebar-options-btn">&#x2630;</button>
                    <button id="logo-btn"><span className="iconify" data-icon="mdi-language-ruby"></span>RubyReel</button>
                </div>
                <div id="sidebar-website-links">
                    <Link id="sidebar-home-link" to='/'><i className="fas fa-home"></i>Home</Link>
                    <Link to='/'><i className="far fa-newspaper"></i>Subscriptions</Link>
                    <Link to='/'><i className="fas fa-photo-video"></i>Your Videos</Link>
                    <Link to='/'><i className="fas fa-thumbs-up"></i>Liked Videos</Link>
                </div>
                <div>
                    <a href="https://github.com/nickdraper8"><i className="fab fa-github"></i>GitHub</a>
                    <a href="https://www.linkedin.com/in/nicholas-draper/"><i className="fab fa-linkedin"></i>LinkedIn</a>
                    <a href="https://github.com/nickdraper8/RubyReel"><i className="fas fa-gem"></i>Project Repo</a>
                </div>
            </section>
        );
    }
}

export default SideBar;