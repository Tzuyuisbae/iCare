import React, { Component } from 'react';
import '../css/main.css';
import FileUpload from '../components/fileUpload.js';
import Query from '../components/query.js';
import Page from '../Page.js';
import {Link} from "react-router-dom";


export default class UploadPage extends React.Component {

    render() {
        return (
            <Page id="upload" className="fullblue">
                <div className="upload">
                    <h1>upload page is here haha yeet</h1>
                    <Link to={'/'}>
                        <button>Go to Login</button>
                    </Link>
                    <div>
                        <FileUpload />
                        <Query />
                    </div>
                </div>
            </Page>
        )
    }

}
