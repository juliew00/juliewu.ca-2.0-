import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"
import axios from 'axios';
import UpdateNavbar from './navbar.component';

export default class Profile extends Component {

    constructor(props){
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDOB = this.onChangeDOB.bind(this);
        this.onChangeFrom = this.onChangeFrom.bind(this);
        this.onChangeLocation = this.onChangeLocation.bind(this);
        this.onChangeEducation = this.onChangeEducation.bind(this);
        this.onChangeWork = this.onChangeWork.bind(this);
        this.onChangeBio = this.onChangeBio.bind(this);
        this.onChangeLikes = this.onChangeLikes.bind(this);
        this.onChangeMusic = this.onChangeMusic.bind(this);
        this.onChangeMovies = this.onChangeMovies.bind(this);
        this.onChangeTV = this.onChangeTV.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeSocial = this.onChangeSocial.bind(this);
        this.addSocial = this.addSocial.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

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
            tv: '',
            email : '',
            social : [],
            newSocial: ''
        }
    }

    componentDidMount() {

        axios.get('http://localhost:5000/users/' + this.userId)
          .then(response => {
            this.setState({
                username: response.data.username,
                name: response.data.profile.name,
                dob: new Date(response.data.profile.dob),
                from: response.data.profile.from,
                location: response.data.profile.location,
                education: response.data.profile.education,
                work: response.data.profile.work,
                bio: response.data.profile.bio,
                likes: response.data.interests.likes,
                music: response.data.interests.music,
                movies: response.data.interests.movies,
                tv: response.data.interests.tv,
                email: response.data.contact.email,
                social: response.data.contact.social
            }) 
          })
          .catch(function (error) {
            console.log(error);
          })
    }

    onChangeName(e) { this.setState({ name: e.target.value }) }

    onChangeDOB(date) { this.setState({ dob: date }) }

    onChangeFrom(e) { this.setState({ from: e.target.value }) }

    onChangeLocation(e) { this.setState({ location: e.target.value }) }

    onChangeEducation(e) { this.setState({ education: e.target.value }) }

    onChangeWork(e) { this.setState({ work: e.target.value }) }

    onChangeBio(e) { this.setState({ bio: e.target.value }) }

    onChangeLikes(e) { this.setState({ likes: e.target.value }) }

    onChangeMusic(e) { this.setState({ music: e.target.value }) }

    onChangeMovies(e) { this.setState({ movies: e.target.value }) }

    onChangeTV(e) { this.setState({ tv: e.target.value }) }

    onChangeEmail(e) { this.setState({ email: e.target.value }) }

    onChangeSocial(e) { this.setState({ newSocial: e.target.value }) }

    addSocial() { 
        this.setState({ social: this.state.social.concat(this.state.newSocial) })
        this.setState({ newSocial: "" })
    }

    removeSocial(index) {
        this.state.social.splice(index, 1);
        this.forceUpdate();
    }

    onSubmit(e) {
        e.preventDefault();
        const newProfile = {
            username: this.state.username,
            profile: {
                name : this.state.name,
                dob: this.state.dob,
                from: this.state.from,
                location: this.state.location,
                education: this.state.education,
                work: this.state.work,
                bio: this.state.bio,
            },
            interests: {
                likes : this.state.likes,
                music : this.state.music,
                movies: this.state.movies,
                tv: this.state.tv
            },
            contact: {
                email : this.state.email,
                social : this.state.social
            }
        }

        console.log(newProfile);

        axios.post('http://localhost:5000/users/update/'+this.userId, newProfile)
            .then(res => console.log(res.data));
    }

    render() {
        return (
            <div className="container">
                <UpdateNavbar />
                <br />
                <h3>Edit Your Profile</h3>
                <br />
                <form onSubmit={this.onSubmit}>

                    <div className="update-profile">
                        <h4>Profile</h4>
                        <div className="form-group">
                            <label>Name</label>
                            <input className="form-control" 
                                required
                                value={this.state.name}
                                onChange={this.onChangeName} />
                        </div>
                        <div className="form-group">
                            <label>Date of Birth</label>
                            <div>
                                <DatePicker 
                                    selected={this.state.dob}
                                    onChange={this.onChangeDOB}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>From</label>
                            <input className="form-control" 
                                value={this.state.from}
                                onChange={this.onChangeFrom} />
                        </div>
                        <div className="form-group">
                            <label>Location</label>
                            <input className="form-control" 
                                value={this.state.location}
                                onChange={this.onChangeLocation} />
                        </div>
                        <div className="form-group">
                            <label>Education</label>
                            <input className="form-control" 
                                value={this.state.education}
                                onChange={this.onChangeEducation} />
                        </div>
                        <div className="form-group">
                            <label>Work</label>
                            <input className="form-control" 
                                value={this.state.work}
                                onChange={this.onChangeWork} />
                        </div>
                        <div className="form-group">
                            <label>Bio</label>
                            <textarea className="form-control" 
                                value={this.state.bio}
                                onChange={this.onChangeBio} />
                        </div>
                    </div>

                    <div className="Interests">
                        <h4>Interests</h4>
                        <div className="form-group">
                            <label>Likes</label>
                            <textarea className="form-control" 
                                value={this.state.likes}
                                onChange={this.onChangeLikes} />
                        </div>
                        <div className="form-group">
                            <label>Music</label>
                            <textarea className="form-control" 
                                value={this.state.music}
                                onChange={this.onChangeMusic} />
                        </div>
                        <div className="form-group">
                            <label>Movies</label>
                            <textarea className="form-control" 
                                value={this.state.movies}
                                onChange={this.onChangeMovies} />
                        </div>
                        <div className="form-group">
                            <label>TV</label>
                            <textarea className="form-control" 
                                value={this.state.tv}
                                onChange={this.onChangeTV} />
                        </div>
                    </div>

                    <div className="Contact">
                        <h4 >Contact</h4>
                        <div className="form-group">
                            <label>Email</label>
                            <input className="form-control" 
                                value={this.state.email}
                                onChange={this.onChangeEmail} />
                        </div>
                        <div className="form-group">
                            <label>Social</label>
                            <div id="socialList"> 
                                {this.state.social.map((text,index) =>
                                    (<p key={index} style={{ color: 'blue' }}>{text}&nbsp;&nbsp;&nbsp;&nbsp;
                                    <button type="reset" className="btn btn-danger btn-sm" onClick={this.removeSocial.bind(this, index)}>remove</button></p>))}
                            </div>
                            <input id="newSocial" className="form-control" value={this.state.newSocial} onChange={this.onChangeSocial}/>
                            <br />
                            <button type="button" htmlFor="newSocial" value={this.state.newSocial} className="btn btn-primary btn-sm" onClick={this.addSocial}>add new social</button>
                        </div>
                    </div>

                    <div className="form-group">
                        <br />
                        <input type="submit" value="Save" className="btn btn-success btn-block" />
                    </div>
                </form>
            </div>
        )
    }
}