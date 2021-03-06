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

    componentDidMount() {
        const cookie = new Cookies();
        cookie.remove('email');
        cookie.remove('permissions');
    }

    render() {
        return (
        <Page id="login" className="halfblue">
            <div style={{marginTop: '65px'}}/>
            <div className = "row">
              <div className="col left">
                <img src={iCareLogo} alt="Logo" className="iCare"/>
                <span className="info infoText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et vulputate nulla. Suspendisse ultrices non nulla at accumsan. Aliquam scelerisque efficitur tellus eu porttitor. Ut fermentum porttitor lectus, sed rhoncus ipsum tincidunt eget. Morbi blandit consequat odio sed commodo. In ut erat pharetra, tempor purus vitae, laoreet massa. Integer aliquam a nisi quis vulputate. Morbi condimentum nibh sed nibh fermentum sodales. Donec vestibulum egestas.
                </span>
              </div>
              <div className="form right">
                    <p className="signupText">Sign In</p>
                    <LoginForm history={this.props.history} />
                </div>
            </div>
          </Page>
        )
    }

}
