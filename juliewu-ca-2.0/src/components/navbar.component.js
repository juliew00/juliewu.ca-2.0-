import React, { Component } from 'react';
import '../css/nav.css';

const highlightedStyle = {
    backgroundPosition: '-100% 0',
    fontWeight: 'bold',
    fontStyle: 'normal',
    color: 'whitesmoke'
}

const unhighlightedStyle = {
    backgroundPosition: 'left bottom',
    fontWeight: 'normal',
    fontStyle: 'italic',
    color: 'black'
}

export default class NavBar extends Component {

    constructor(props) {
        super(props)

        this.toggleAbout = this.toggleAbout.bind(this);
        this.toggleBlog = this.toggleBlog.bind(this);

        this.state = {
            hoverAbout: false,
            hoverBlog: false
        }
    }

    toggleAbout() {
        this.setState({hoverAbout: !this.state.hoverAbout})
    }

    toggleBlog() {
        this.setState({hoverBlog: !this.state.hoverBlog})
    }

    render() {
        var styleAbout, styleBlog;
        if (this.state.hoverAbout) {
            styleAbout = highlightedStyle;
        } else if (this.state.hoverBlog) {
            styleBlog = highlightedStyle;
        } else {
            styleAbout = unhighlightedStyle;
        }
        return (
            <div className="container-fluid main-nav">
                <nav className="navbar navbar-expand">
                    <div className="collpase navbar-collapse">
                        <a className="navbar-brand mr-auto">Hello World!</a>
                        <ul className="navbar-nav ml-auto">
                            <li className="">
                                <a style={styleAbout} href="/" className="nav-link main-nav-link" 
                                onMouseEnter={this.toggleAbout} 
                                onMouseLeave={this.toggleAbout}>about</a>
                            </li>
                            <li className="">
                                <a style={styleBlog} href="/blog" className="nav-link main-nav-link" 
                                onMouseEnter={this.toggleBlog} 
                                onMouseLeave={this.toggleBlog}>blog</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}