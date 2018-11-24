import React from 'react';
import '../css/main.css';
import '../css/login.css';
import FileUpload from '../components/fileUpload.js';
import InsertAccount from '../components/insertAccount';
import Query from '../components/query.js';
import Page from '../Page.js';
import {Link} from "react-router-dom";
import Navbar from '../components/Navbar';
import Cookies from 'universal-cookie';


export default class UploadPage extends React.Component {
    constructor(){
        super();
        this.state={
            thanks: false
        }
    };

    toggleThanks = () => {
        this.setState({
            thanks: !this.state.thanks
        })
    }

    render() {
        const cookie = new Cookies();
        const display = this.state.thanks ? 
        (<div className="col3">
            <p className="thanks">Thanks!</p>
            <button className="button" onClick={() => this.toggleThanks()}>Upload Again!</button>
        </div>)
        :
        (<div className="col2">
            <h1 className="signupText">Fill Out The Form</h1>
            <Link to={'/'}>
                <button>Go to Login</button>
            </Link>
            <FileUpload thanks={() => this.toggleThanks()} />
            <Query />
        </div>);

        return (
            <div>
            <div className="topleft">
                <p className="iCareWhite">iCare</p>
            </div>
            <Page id="upload" className="fullblue">
                <div className="pos">
                   <Navbar permissions={cookie.get('permissions')}/>
                    <div className="form">
                        {display}
                    </div>
                </div>
            </Page>
            </div>
        )
    }

}
