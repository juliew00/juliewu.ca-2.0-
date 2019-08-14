import React, { Component } from 'react';
import "react-datepicker/dist/react-datepicker.css"
import axios from 'axios';

export default class BlogCreate extends Component {

    constructor(props){
        super(props);

        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeContent = this.onChangeContent.bind(this);
        this.onChangeLink = this.onChangeLink.bind(this);
        this.addLink = this.addLink.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            title: '',
            content: '',
            links: [],
            dateCreated: new Date(),
            newLink: ''
        }
    }
    
    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        })
    }

    onChangeContent(e) {
        this.setState({
            content: e.target.value
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
        const newBlog = {
            title: this.state.title,
            content: this.state.content,
            links: this.state.links,
            dateCreated: new Date()
        }

        console.log(newBlog);

        axios.post('http://localhost:5000/blogs/add', newBlog)
            .then(res => console.log(res.data));

        window.location = '/update/blogs';
    }

    render() {
        return (
            <div>
                <h3>Create New Blog Form</h3>
                <br />
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Title: </label>
                        <input type="title" 
                            required 
                            className="form-control" 
                            value={this.state.title} 
                            onChange={this.onChangeTitle} 
                            placeholder="Enter Title" />
                        <br />
                    </div>
                    <div className="form-group">
                        <label>Text: </label>
                        <textarea type="text" 
                            className="form-control"
                            value={this.state.content} 
                            onChange={this.onChangeContent} 
                            rows="10" />
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
                        <input type="submit" value="Create" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}