import React, { Component } from 'react';
import '../css/main.css';
import FileUpload from '../components/fileUpload.js';
import Query from '../components/query.js';
import {Link} from "react-router-dom";


export default class ChangePasswordPage extends React.Component {

    state = 
    {
        oldPassword: '',
        newPassword: '',
        retypeNewPassword: '',
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
        this.setState({
            oldPassword: '',
            NewPassword: '',
            retypeNewpassword: ''
        });

        axios.post('http://localhost:8000/authenticate', 
        {'email':this.props.username, 'password':this.state.oldPassword},
        {headers :{'Content-Type': 'application/json'}})
        .then(res => {
            this.setState({ data: res.data });
            console.log(this.state.data);
            if(this.state.data.authenticated){
                this.props.history.push("/ChangePasswordForm")
                
                // change the password in the database


            }
            else{
                console.log('failed');
            }
        })
    };

    render() {
        const place = !this.state.canchange ? '/form' : '/ChangePasswordForm';
        return (
            <div className="ChangePasswordForm">
                <form>
                    <input 
                        id='oldPassword'
                        type='password'
                        placeholder='Password' 
                        value={this.state.oldPassword}
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
                    <br />
                    <input 
                        id='retypeNewPassword'
                        type='password'
                        placeholder='Retype Password' 
                        value={this.state.retypeNewPassword}
                        onChange={e => this.updateChangePasswordPage(e)}
                    />
                    <br />
                    <button onClick={e => this.onSubmit(e)}>Submit</button>
                </form>
                <div className={'nav-items'}>
                    <Link to={place}>
                        <button>Confirm</button>
                    </Link>
                </div>
            </div>
        )
    }   
}