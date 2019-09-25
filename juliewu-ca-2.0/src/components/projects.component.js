import React, { Component } from 'react';
import axios from 'axios';
import '../css/project.css';

export default class Projects extends Component {
    constructor(props){
        super(props);

        this.state = {
            projects: []
        }
    }

    componentDidMount() {

        axios.get('http://localhost:5000/works/')
          .then(response => {
            this.setState({
                projects : response.data.filter(p => p.isProject === true)
            }) 
          })
          .catch(function (error) {
            console.log(error);
          })
    }

    showLinks (project) {
        return project.links.map(currentLink => {
            return <div>
                <a className="link" href={currentLink} target="_blank" rel="noopener noreferrer">
                    {currentLink}   
                </a>
            </div>
        })
    }

    projectList () {
        return this.state.projects.map(currentProject => {
            return <div className="project">
                <h1 className="project-title">{currentProject.title}</h1>
                <p className="date">[ {currentProject.dateFrom.substring(0,10)} to {currentProject.dateTo != null ? currentProject.dateTo.substring(0,10) : "current"} ]</p>
                <p className="description">{currentProject.description}</p>
                <div className="links">Links : {this.showLinks(currentProject)}</div>
            </div>
        })
    }

    render() {
        return (
            <div className="container-fluid projects">
                <link href="https://fonts.googleapis.com/css?family=Bungee+Inline|Fredoka+One&display=swap" rel="stylesheet"></link>
                <div className="container-fluid text-left projects-title">
                    <h1>> projects</h1>
                </div>
                <div className="container-fluid projects-list"> 
                    {this.projectList()}
                </div>
            </div>
        )
    }
}