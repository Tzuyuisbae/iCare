import React, { Component } from 'react';
import '../css/main.css';
import '../css/login.css';
import axios from 'axios';
import {Link} from "react-router-dom";

export default class LoginForm extends React.Component {

    state = 
    {
        username: '',
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
        this.setState({
            username: '',
            password: ''
        });

        axios.post('http://localhost:8000/authenticate', 
        {'email':this.state.username, 'password':this.state.password},
        {headers :{'Content-Type': 'application/json'}})
        .then(res => {
            this.setState({ data: res.data });
            console.log(this.state.data);
            if(this.state.data.authenticated){
                this.props.history.push("/upload")
            }
            else{
                console.log('failed');
            }
        })
    };


    render() {
        const place = !this.state.cango ? '/upload' : '/';
        return (
                <form>
                    <input 
                        id='username'
                        placeholder='Username' 
                        value={this.state.username}
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
                </form>
        )
    }

}
