import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand">
                <div className="collpase navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/About" className="nav-link">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Resume" className="nav-link">Resume</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Projects" className="nav-link">Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Work" className="nav-link">Work</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Blogs" className="nav-link">Blogs</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}