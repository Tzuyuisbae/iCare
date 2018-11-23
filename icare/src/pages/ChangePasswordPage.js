import React from 'react';
import '../css/main.css';
import axios from 'axios';

export default class ChangePasswordPage extends React.Component {

    state = 
    {
        email: '',
        newPassword: '',
        data : {},
    }

    updateChangePasswordPage = e => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };

    onSubmit = e => {
        e.preventDefault();

        axios.post('http://localhost:8000/changePassword',
            { 'email': this.state.email, 'newPassword': this.state.newPassword },
            { headers: { 'Content-Type': 'application/json' }})
            .then(res => {
                alert(res.data.status);
                this.setState({ 
                    ...this.state, 
                    data: res.data 
                });

            })

    };

    render() {
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