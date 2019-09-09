import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import UpdateNavbar from './navbar.component';

const Work = props => (
    <tr>
        <td>{props.work.title}</td>
        <td style={{ color: 'orange' }}>{props.work.isProject ? "project" : "work"}</td>
        <td>{props.work.dateFrom.substring(0,10)}</td>
        <td>{props.work.dateTo != null ? props.work.dateTo.substring(0,10) : "current"}</td>
        <td>
            <Link to={"/update/works/edit/"+props.work._id}>edit</Link>  |  <Link to='/update/works' type="deleteButton" onClick={() => { if (window.confirm('Are you sure you wish to delete this?')) props.deleteWork(props.work._id) }}>delete</Link>
        </td>
    </tr> 
)

export default class WorksList extends Component {
    constructor(props) {
        super(props);

        this.deleteWork = this.deleteWork.bind(this);

        this.state = {works: []};
    }

    componentDidMount() {
        axios.get('http://localhost:5000/works/')
            .then(response => {
                this.setState({
                    works : response.data
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    deleteWork(id) {
        axios.delete('http://localhost:5000/works/' + id)
            .then(res => console.log(res.data));

        this.setState({
            works: this.state.works.filter(el => el._id !== id)
        })
    }

    worksList () {
        return this.state.works.map(currentWork => {
            return <Work work={currentWork}
                        deleteWork={this.deleteWork}
                        key={currentWork._id} />;
        })
    }

    render() {
        return (
            <div className="container">
                <UpdateNavbar />
                <br />
                <Link to={"/update/works/create"} className="btn btn-success float-right"> Create New Work</Link>
                <br />
                <h3 style={{ paddingTop: '50px'}}>Work List</h3>
                <br />
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Type</th>
                            <th>From</th>
                            <th>To</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.worksList()}
                    </tbody>
                </table>
            </div>
        )
    }
}