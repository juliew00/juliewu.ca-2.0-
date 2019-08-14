import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"
import axios from 'axios';

export default class WorkCreate extends Component {
    constructor(props){
        super(props);

        this.onChangeIsProject = this.onChangeIsProject.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDateFrom = this.onChangeDateFrom.bind(this);
        this.onChangeDateTo = this.onChangeDateTo.bind(this);
        this.onChangeLocation = this.onChangeLocation.bind(this);
        this.onChangeOraganization = this.onChangeOraganization.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeLink = this.onChangeLink.bind(this);
        this.addLink = this.addLink.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            isProject: false,
            title: '',
            dateFrom: new Date(),
            dateTo: null,
            location: '',
            organization: '',
            description: '',
            links: []
        }
    }

    onChangeIsProject(e){
        this.setState({
            isProject: e.target.checked
        })
    }
    
    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        })
    }

    onChangeDateFrom(dateFrom) {
        this.setState({
            dateFrom: dateFrom
        })
    }

    onChangeDateTo(dateTo) {
        this.setState({
            dateTo: dateTo
        })
    }

    onChangeLocation(e) {
        this.setState({
            location: e.target.value
        })
    }

    onChangeOraganization(e) {
        this.setState({
            organization: e.target.value
        })
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        })
    }

    onChangeLink(e) {
        this.setState({
            newLink: e.target.value
        })
    }

    addLink() { 
        this.setState({ links: this.state.links.concat(this.state.newLink) })
        this.setState({ newLink: "" })
    }

    removeLink(index) {
        this.state.links.splice(index, 1);
        this.forceUpdate();
    }

    onSubmit(e) {
        e.preventDefault();
        const newWork = {
            isProject: this.state.isProject,
            title: this.state.title,
            dateFrom: this.state.dateFrom,
            dateTo: this.state.dateTo,
            location: this.state.location,
            organization: this.state.organization,
            description: this.state.description,
            links: this.state.links
        }

        console.log(newWork);

        axios.post('http://localhost:5000/works/add', newWork)
            .then(res => console.log(res.data));
             
        window.location = '/update/works';
    }

    render() {
        return (
            <div>
                <h3>Create New Work Form</h3>
                <br />
                <form onSubmit={this.onSubmit}>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input"
                            checked={this.state.isProject}
                            onChange={this.onChangeIsProject} />
                        <label>Is Project?</label>
                        <br />
                    </div>
                    <div className="form-group">
                        <label>Title: </label>
                        <input type="title" 
                            required 
                            className="form-control" 
                            value={this.state.title} 
                            onChange={this.onChangeTitle} 
                            placeholder="Enter Title" />
                    </div>
                    <div className="form-group">
                        <label>Location: </label>
                        <input type="location" 
                            className="form-control" 
                            value={this.state.location} 
                            onChange={this.onChangeLocation} 
                            placeholder="Enter Location" />
                    </div>
                    <div className="form-group">
                        <label>Organization: </label>
                        <input type="organization" 
                            className="form-control" 
                            value={this.state.organization} 
                            onChange={this.onChangeOraganization} 
                            placeholder="Enter Organization" />
                    </div>
                    <div className="form-group">
                        <label>Date From: </label>
                        <div>
                            <DatePicker 
                                selected={this.state.dateFrom}
                                onChange={this.onChangeDateFrom}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Date To: </label>
                        <div>
                            <DatePicker 
                                selected={this.state.dateTo}
                                onChange={this.onChangeDateTo}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <textarea type="text" 
                            className="form-control"
                            value={this.state.description} 
                            onChange={this.onChangeDescription} 
                            rows="5" />
                        <br />
                    </div>
                    <div className="form-group">
                        <label>Links: </label>
                        <div id="Links"> 
                            {this.state.links.map((text,index) =>
                                (<p key={index} style={{ color: 'blue' }}>{text}&nbsp;&nbsp;&nbsp;&nbsp;
                                <button type="reset" className="btn btn-danger btn-sm" onClick={this.removeLink.bind(this, index)}>remove</button></p>))}
                        </div>
                        <input id="newLink" className="form-control" value={this.state.newLink} onChange={this.onChangeLink}/>
                        <br />
                        <button type="button" htmlFor="newSocial" value={this.state.newLink} className="btn btn-primary btn-sm" onClick={this.addLink}>add new link</button>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create" className="btn btn-success btn-block" />
                    </div>
                </form>
            </div>
        )
    }
}