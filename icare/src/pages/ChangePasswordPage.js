import React from 'react';
import '../css/main.css';
import '../css/Page.css';
import axios from 'axios';
import Page from "../Page";

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
            <Page className="fullblue">
                <div className="pos">
                    <form className="form">
                        <div className="col2">
                            <h1 className="signupText">Change Password</h1>
                            <input 
                                id='email'
                                placeholder='Email' 
                                value={this.state.email}
                                onChange={e => this.updateChangePasswordPage(e)}
                                className="input"
                            />
                            <br />
                            <input 
                                id='newPassword'
                                type='password'
                                placeholder='New Password' 
                                value={this.state.newPassword}
                                onChange={e => this.updateChangePasswordPage(e)}
                                className="input"
                            />
                            <br />
                            <button onClick={e => this.onSubmit(e)} className="button">Submit</button>
                            <button onClick={() => this.props.history.push('/upload')} className="button">Go Back</button>
                        </div>
                    </form>
                </div>
            </Page>
        )
    }   
}