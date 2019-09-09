import React, { Component } from 'react';

import Navbar from "./navbar.component";
import Profile from "./profile.component";
import Resume from "./resume.component";
import Contact from "./contact.component";

export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <Navbar />
                <Profile />
                <Resume />
                <Contact />
            </div>
        )
    }
}