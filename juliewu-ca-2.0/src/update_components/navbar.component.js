import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand">
                <div className="collpase navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/update" className="nav-link">Profile</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/update/works" className="nav-link">Works</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/update/blogs" className="nav-link">Blogs</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">back to home</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}