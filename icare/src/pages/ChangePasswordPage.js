import React, { Component } from 'react';
import '../css/main.css';
import FileUpload from '../components/fileUpload.js';
import Query from '../components/query.js';
import {Link} from "react-router-dom";
import Cookies from 'universal-cookie';
import cookie from './LoginPage';
import LoginPage from './LoginPage';
import axios from 'axios';


export default class ChangePasswordPage extends React.Component {

    state = 
    {
        email: '',
        newPassword: '',
        canchange: false,
        data : {},
    }

    updateChangePasswordPage = e => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };

    onSubmit = e => {
        e.preventDefault();
        const cookie = new Cookies();
        cookie.set('email', this.state.email, { path: '/' });

        axios.post('http://localhost:8000/authenticate',
            { 'email': this.state.email, 'password': this.state.newPassword },
            { headers: { 'Content-Type': 'application/json' } })
            .then(res => {
                this.setState({
                    ...this.state,
                    data: res.data
                });

                if (this.state.data.authenticated) {
                    cookie.set('permissions', 1, { path: '/' });
                    this.props.history.push({
                        pathname: "/upload",
                        state: {
                            permissions: res.data.permissions,
                            email: this.state.email,
                        }
                    });
                }
                else {
                    console.log('failed');
                }
            })

        this.setState({
            email: '',
            password: ''
        });
    };

    render() {
        const place = !this.state.canchange ? '/LoginPage' : '/ChangePasswordForm';
        return (
            <div className="ChangePasswordForm">
                <form>
                    <input 
                        id='email'
                        placeholder='Email' 
                        value={this.state.email}
                        onChange={e => this.updateChangePasswordPage(e)}
                    />
                    <br />
                    <input 
                        id='newPassword'
                        type='password'
                        placeholder='New Password' 
                        value={this.state.newPassword}
                        onChange={e => this.updateChangePasswordPage(e)}
                    />
                    <br />
                    <button onClick={e => this.onSubmit(e)}>Submit</button>
                </form>
            </div>
        )
    }   
}