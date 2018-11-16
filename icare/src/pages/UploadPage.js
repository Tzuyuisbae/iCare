import React from 'react';
import '../css/main.css';
import FileUpload from '../components/fileUpload.js';
import Query from '../components/query.js';
import Navbar from '../components/Navbar';


export default class UploadPage extends React.Component {

    render() {
        return (
            <div className="upload">
                <Navbar location={this.props.location}/>
                <h1>upload page is here haha yeet</h1>
                <div>
                    <FileUpload />
                    <Query />
                </div>
            </div>
        )
    }

}
