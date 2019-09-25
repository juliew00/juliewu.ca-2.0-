import React, { Component } from 'react';
import ResumePDF from '../Resources/resume.pdf';
import '../css/resume.css';

export default class Resume extends Component {

    render() {
        return (
            <div className="container-fluid resume resumeLink">
                <div className="container-fluid text-center">
                    <a id="link" href={ResumePDF} target="_blank" rel="noopener noreferrer">julie_wu_resume_2A.pdf</a>
                </div>
            </div>
        )
    }
}