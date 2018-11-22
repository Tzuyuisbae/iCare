import React, { Component } from 'react';
import '../css/login.css';
import '../css/main.css';
import Navbar from '../components/Navbar';
import {Link} from "react-router-dom";
import LoginForm from "../components/LoginForm"
import { browserHistory } from 'react-router';
import axios from 'axios';
import Page from '../Page.js';
import iCareLogo from "../images/iCare.png"
import Cookies from 'universal-cookie';

export default class LoginPage extends React.Component {

    state = 
    {
        email: '',
        password: '',
        data : {},
    }

    updateLoginPage = e => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };

    onSubmit = e => {
        e.preventDefault();
        const cookie = new Cookies();
        cookie.set('email', this.state.email, {path: '/'});

        axios.post('http://localhost:8000/authenticate', 
        {'email':this.state.email, 'password':this.state.password},
        {headers :{'Content-Type': 'application/json'}})
        .then(res => {
            this.setState({ 
                ...this.state, 
                data: res.data 
            });
            
            if(this.state.data.authenticated){
                cookie.set('permissions', 1, {path: '/'});
                this.props.history.push({
                    pathname : "/upload",
                    state : {
                        permissions: res.data.permissions,
                        email: this.state.email,
                    }
                });
            }
            else{
                console.log('failed');
            }
        })

        this.setState({
            email: '',
            password: ''
        });
    };

    render() {
        return (
            <Page id="login" className="halfblue">
            <div style={{marginTop: '65px'}}/>
            <div className = "row">
              <div className="col left">
                <img src={iCareLogo} className="iCare"/>
                <span className="info infoText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et vulputate nulla. Suspendisse ultrices non nulla at accumsan. Aliquam scelerisque efficitur tellus eu porttitor. Ut fermentum porttitor lectus, sed rhoncus ipsum tincidunt eget. Morbi blandit consequat odio sed commodo. In ut erat pharetra, tempor purus vitae, laoreet massa. Integer aliquam a nisi quis vulputate. Morbi condimentum nibh sed nibh fermentum sodales. Donec vestibulum egestas.
                </span>
              </div>
              <div className="form right">
                    <p className="signupText">Sign In</p>
                    <LoginForm history={this.props.history} />
                    <div className={'nav-items'}>
                        <Link to={place}>
                            <button>Go to upload</button>
                        </Link>
                    </div>
                </div>
          </Page>
        )
    }

}
