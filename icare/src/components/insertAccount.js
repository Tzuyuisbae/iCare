import React from 'react';
import '../css/main.css';
import axios from 'axios';
import Cookies from 'universal-cookie';

export default class InsertAccount extends React.Component {

    constructor () {
        super();
        this.state = {
            Name: '',
            email: '',
            pass: '',
            organization: '',
            permissions: '',
            status: ''
        }
    }

    updateLoginForm = e => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };

    onSubmit = e => {
        e.preventDefault();

        axios.post('http://localhost:8000/insertAccount',
        {'email':this.state.email, 'pass':this.state.pass, 'Name' : this.state.Name, 'organization' : this.state.organization, 'permissions': this.state.permissions},
        {headers :{'Content-Type': 'application/json'}})
        .then (res => {
            this.setState({status: JSON.stringify(res.data)})
        })
    };

    render () {
        return (
            <form>
                <input 
                    id='Name'
                    placeholder='Name' 
                    value={this.state.Name}
                    onChange={e => this.updateLoginForm(e)}
                />
                <br />
                <input 
                    id='email'
                    type='email'
                    placeholder='email' 
                    value={this.state.email}
                    onChange={e => this.updateLoginForm(e)}
                />
                <br />
                <input 
                    id='pass'
                    placeholder='password' 
                    value={this.state.password}
                    onChange={e => this.updateLoginForm(e)}
                />
                <br />
                <input 
                    id='organization'
                    placeholder='organization' 
                    value={this.state.organization}
                    onChange={e => this.updateLoginForm(e)}
                />
                <br />
                <input 
                    id='permissions'
                    placeholder='permissions (0 or 1)' 
                    value={this.state.permissions}
                    onChange={e => this.updateLoginForm(e)}
                />
                <br />
                <button onClick={e => this.onSubmit(e)}>Submit </button>
                <br />
                <h1>{this.state.status}</h1>
            </form>
        )
    }
}