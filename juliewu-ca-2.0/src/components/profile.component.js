import React, { Component } from 'react';
import axios from 'axios';
import '../css/profile.css';

export default class Profile extends Component {
    constructor(props){
        super(props);

        // retrieved from mongoDB
        this.userId = "5d4769c61c9d440000cfe4b5";

        this.state = {
            username : '',
            name : '',
            dob: null,
            from: '',
            location: '',
            education: '',
            work: '',
            bio: '',
            likes : '',
            music : '',
            movies: '',
            tv: ''
        }
    }

    componentDidMount() {

        axios.get('http://localhost:5000/users/' + this.userId)
          .then(response => {
            this.setState({
                username: response.data.username,
                name: response.data.profile.name,
                dob: response.data.profile.dob.substring(0,10),
                from: response.data.profile.from,
                location: response.data.profile.location,
                education: response.data.profile.education,
                work: response.data.profile.work,
                bio: response.data.profile.bio,
                likes: response.data.interests.likes,
                music: response.data.interests.music,
                movies: response.data.interests.movies,
                tv: response.data.interests.tv
            }) 
          })
          .catch(function (error) {
            console.log(error);
          })
    }

    render() {
        return (
            <div className="container-fluid profile">
                <div className="terminal">
                    <div className="terminal-window-header">
                            <div className="buttons">
                                    <button className="terminal-window-button button-red" />
                                    <button className="terminal-window-button button-yellow" />
                                    <button className="terminal-window-button button-green" />
                            </div>
                            <span className="title">juliewu.profile</span>
                    </div>
                    <div className="terminal-window">
                        <div className="text">
                            <p className="key">> name</p>
                            <p className="value">{this.state.name}</p>
                            <p className="key">> birthday</p>
                            <p className="value">{this.state.dob}</p>
                            <p className="key">> hometown</p>
                            <p className="value">{this.state.from}</p>
                            <p className="key">> location</p>
                            <p className="value">{this.state.location}</p>
                            <p className="key">> education</p>
                            <p className="value">{this.state.education}</p>
                            <p className="key">> work</p>
                            <p className="value">{this.state.work}</p>
                            <p className="key">> bio</p>
                            <p className="value">{this.state.bio}</p>
                            <br />
                            <p className="key">> likes</p>
                            <p className="value">{this.state.likes}</p>
                            <p className="key">> music</p>
                            <p className="value">{this.state.music}</p>
                            <p className="key">> movies</p>
                            <p className="value">{this.state.movies}</p>
                            <p className="key">> television</p>
                            <p className="value">{this.state.tv}</p> 
                            <br />
                            <p className="key last">></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}