import React, { Component } from 'react';
import '../css/main.css';

export default class LoginForm extends React.Component {

    state = 
    {
        username: '',
        password: '',
    }

    change = e => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };

    onSubmit = e => {
        e.preventDefault();
        console.log(this.state);
    }


    render() {
        return (
            <form>
                <input 
                    id='username'
                    placeholder='Username' 
                    value={this.state.username}
                    onChange={e => this.change(e)}
                />
                <br />
                <input 
                    id='password'
                    type='password'
                    placeholder='Password' 
                    value={this.state.password}
                    onChange={e => this.change(e)}
                />
                <br />
                <button onClick={e => this.onSubmit(e)}>Submit </button>
            </form>
        )
    }

}
