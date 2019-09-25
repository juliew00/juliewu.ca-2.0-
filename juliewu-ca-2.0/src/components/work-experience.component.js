import React, { Component } from 'react';
import axios from 'axios';
import '../css/work-experience.css';

export default class WorkExperience extends Component {
    constructor(props){
        super(props);

        this.state = {
            works: []
        }
    }

    componentDidMount() {

        axios.get('http://localhost:5000/works/')
          .then(response => {
            this.setState({
                works : response.data.filter(p => p.isProject === false)
            }) 
          })
          .catch(function (error) {
            console.log(error);
          })
    }

    worksList () {
        return this.state.works.map(work => {
            return <div className="work">
                <h1 className="position-company">{work.title} - <a href={work.links[0]}>{work.organization}</a></h1>
                <p className="location">{work.location}</p>
                <p className="date">{work.dateFrom.substring(0,10)} to {work.dateTo != null ? work.dateTo.substring(0,10) : "current"}</p>
                <p className="work-description">{work.description}</p>
            </div>
        })
    }

    render() {
        return (
            <div className="container-fluid works">
                <link href="https://fonts.googleapis.com/css?family=Bungee+Inline|Fredoka+One&display=swap" rel="stylesheet"></link>
                <div className="container-fluid text-left work-title">
                    <h1 className="work-title">> work</h1>
                </div>
                <div className="container-fluid works-list"> 
                    {this.worksList()}
                </div>
            </div>
        )
    }
}