import React from 'react';
import '../css/main.css';
import FileUpload from '../components/fileUpload.js';
import Query from '../components/query.js';
import Navbar from '../components/Navbar';
import Cookies from 'universal-cookie';


export default class UploadPage extends React.Component {

    render() {
        const cookie = new Cookies();
        return (
            <div className="upload">
                <Navbar permissions={cookie.get('permissions')}/>
                <h1>upload page is here haha yeet</h1>
                <div>
                    <FileUpload />
                    <Query />
                </div>
            </div>
        )
    }

}
