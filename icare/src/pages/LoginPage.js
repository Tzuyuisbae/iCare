import React, { Component } from 'react';
import '../css/main.css';
import Navbar from '../components/Navbar';
import {Link} from "react-router-dom";
import { browserHistory } from 'react-router';
import axios from 'axios';

export default class LoginPage extends React.Component {

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
        })
        // this.props.history.push("/upload")
    };


    render() {
        const place = !this.state.cango ? '/upload' : '/';
        return (
            <div className="form">
                <form>
                    <input 
                        id='username'
                        placeholder='Username' 
                        value={this.state.username}
                        onChange={e => this.updateLoginPage(e)}
                    />
                    <br />
                    <input 
                        id='password'
                        type='password'
                        placeholder='Password' 
                        value={this.state.password}
                        onChange={e => this.updateLoginPage(e)}
                    />
                    <br />
                    <button onClick={e => this.onSubmit(e)}>Submit</button>
                </form>
                <div className={'nav-items'}>
                    <Link to={place}>
                        <button>Go to upload</button>
                    </Link>
                </div>
                <p>{JSON.stringify(this.state)}</p>
            </div>
        )
    }

}
