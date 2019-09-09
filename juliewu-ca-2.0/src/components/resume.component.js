import React, { Component } from 'react';
import ResumePDF from '../Resources/juliewu_resume_Aug20.pdf';

export default class Resume extends Component {
    render() {
        return (
            <div className="container-fluid resume resumeLink">
                <div className="container-fluid text-center">
                    <a href={ResumePDF} target="_blank" rel="noopener noreferrer">julie_wu_resume_2A.pdf</a>
                </div>
            </div>
        )
    }
}