import React, { Component } from 'react';

export default class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                <footer className="page-footer font-small blacks pt-4">
                    <div className="container-fluid text-center">
                            <a href="https://github.com/juliew00" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a> 
                            <a href="https://twitter.com/JumboJulie" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a>  
                            <a href="https://linkedin.com/in/julie-wu" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>  
                            <a href="mailto:julie-wu@outlook.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-envelope"></i></a> 
                    </div>
                    <div className="container-fluid text-center">
                        <p>Created &amp; Developed by Julie Wu - 2019</p>
                    </div>
                </footer>
            </div>
        )
    }
}