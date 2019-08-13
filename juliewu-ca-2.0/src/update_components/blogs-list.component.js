import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Blog = props => (
    <tr>
        <td>{props.blog.title}</td>
        <td>{props.blog.dateCreated.substring(0,10)}</td>
        <td>
            <Link to={"/update/blogs/edit/"+props.blog._id}>edit</Link>  |  <Link to="/update/blogs/" type="deleteButton" onClick={() => { if (window.confirm('Are you sure you wish to delete this?')) props.deleteBlog(props.blog._id) }}>delete</Link>
        </td>
    </tr> 
)

export default class BlogsList extends Component {
    constructor(props) {
        super(props);

        this.deleteBlog = this.deleteBlog.bind(this);

        this.state = {blogs: []};
    }

    componentDidMount() {
        axios.get('http://localhost:5000/blogs/')
            .then(response => {
                this.setState({
                    blogs : response.data
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    deleteBlog(id) {
        axios.delete('http://localhost:5000/blogs/' + id)
            .then(res => console.log(res.data));

        this.setState({
            blogs: this.state.blogs.filter(el => el._id !== id)
        })
    }

    blogsList () {
        return this.state.blogs.map(currentBlog => {
            return <Blog blog={currentBlog}
                        deleteBlog={this.deleteBlog}
                        key={currentBlog._id} />;
        })
    }

    render() {
        return (
            <div>
                <Link to={"/update/blogs/create"} className="btn btn-success float-right"> Create New Blog</Link>
                <br />
                <h3 style={{ paddingTop: '50px'}}>Blog List</h3>
                <br />
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Date Created</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.blogsList()}
                    </tbody>
                </table>
            </div>
        )
    }
}