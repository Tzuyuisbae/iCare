import React, { Component } from 'react';
import '../css/main.css';
import FileUpload from '../components/fileUpload.js';
import Query from '../components/query.js';
import {Link} from "react-router-dom";


export default class ChangePasswordPage extends React.Component {

    render() {
        return (
            <div className="ChangePassword">
                <h1>upload page is here haha yeet</h1>
                <Link to={'/'}>
                    <button>Go to Login</button>
                </Link>
                <div>
                    <FileUpload />
                    <Query />
                </div>
            </div>
        )
    }

}