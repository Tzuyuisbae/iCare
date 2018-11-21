import React, { Component } from 'react';
import '../css/main.css';
import '../css/login.css';
import FileUpload from '../components/fileUpload.js';
import Query from '../components/query.js';
import Page from '../Page.js';
import {Link} from "react-router-dom";


export default class UploadPage extends React.Component {

    render() {
        return (
            <div>
            <div className="topleft">
                <p className="iCareWhite">iCare</p>
            </div>
            <Page id="upload" className="fullblue">
                <div className="pos">
                    <div className="form">
                        <div className="col2">
                                <h1 className="signupText">Fill Out The Form</h1>
                                <Link to={'/'}>
                                    <button>Go to Login</button>
                                </Link>
                                <FileUpload />
                                <Query />
                                <button className="button">Submit</button>
                        </div>
                    </div>
                </div>
            </Page>
            </div>
        )
    }

}
