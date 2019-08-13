import React, { Component } from 'react';
import "react-datepicker/dist/react-datepicker.css"
import axios from 'axios';

export default class BlogEdit extends Component {

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

    componentDidMount() {
        axios.get('http://localhost:5000/blogs/'+this.props.match.params.id)
          .then(response => {
            this.setState({
              title: response.data.title,
              content: response.data.content
            })   
          })
          .catch(function (error) {
            console.log(error);
          })
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
        }

        console.log(newBlog);

        axios.post('http://localhost:5000/blogs/update/'+ this.props.match.params.id, newBlog)
            .then(res => console.log(res.data));

        window.location = '/update/blogs';
    }

    render() {
        return (
            <div>
                <h3>Edit Blog Form</h3>
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
                        <input type="submit" value="Save" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}