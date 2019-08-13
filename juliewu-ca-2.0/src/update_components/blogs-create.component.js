import React, { Component } from 'react';
import "react-datepicker/dist/react-datepicker.css"
import axios from 'axios';

export default class BlogCreate extends Component {

    constructor(props){
        super(props);

        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeContent = this.onChangeContent.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            title: '',
            content: '',
            dateCreated: new Date()
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

    onSubmit(e) {
        e.preventDefault();
        const newBlog = {
            title: this.state.title,
            content: this.state.content,
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
                        <input type="submit" value="Create" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}