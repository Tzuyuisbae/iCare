import React, { Component } from 'react';
import '../css/main.css';
import '../css/login.css';
import axios from 'axios';
import {Link} from "react-router-dom";
import Cookies from 'universal-cookie';

export default class LoginForm extends React.Component {

    state = 
    {
        email: '',
        password: '',
        cango: false,
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
        console.log(this.state.email);
        cookie.set('email', this.state.email, {path: '/'});

        axios.post('http://localhost:8000/authenticate', 
        {'email':this.state.email, 'password':this.state.password},
        {headers :{'Content-Type': 'application/json'}})
        .then(res => {
            this.setState({ data: res.data });
            console.log(this.state.data);
            if(this.state.data.authenticated){
                cookie.set('permissions', res.data.permissions, {path : '/'});
                this.props.history.push("/upload");
            }
            else{
                console.log('failed');
            }

            this.setState({
                email: '',
                password: ''
            });
        })
    };


    render() {
        const place = !this.state.cango ? '/upload' : '/';
        return (
                <form>
                    <input 
                        id='email'
                        placeholder='Email' 
                        value={this.state.email}
                        onChange={e => this.updateLoginPage(e)}
                        className="input"
                    />
                    <br />
                    <input 
                        id='password'
                        type='password'
                        placeholder='Password' 
                        value={this.state.password}
                        onChange={e => this.updateLoginPage(e)}
                        className="input"
                    />
                    <br />
                    <button onClick={e => this.onSubmit(e)} className="button">Sign In</button>
                    <div>{this.state.email}</div>
                </form>
        )
    }

}
