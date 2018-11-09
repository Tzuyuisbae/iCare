import React, { Component } from 'react';
import '../css/main.css';
import {Link} from "react-router-dom";


export default class UploadPage extends React.Component {

    render() {
        return (
            <div className="upload">
                <h1>upload page is here haha yeet</h1>
                <Link to={'/'}>
                    <button>Go to Login</button>
                </Link>
            </div>
        )
    }

}
