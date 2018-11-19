import React from 'react';
import '../css/main.css';
import axios from 'axios';
import Cookies from 'universal-cookie';

export default class LoginPage extends React.Component {

    state = 
    {
        email: '',
        password: '',
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
        cookie.set('email', this.state.email, {path: '/'});

        axios.post('http://localhost:8000/authenticate', 
        {'email':this.state.email, 'password':this.state.password},
        {headers :{'Content-Type': 'application/json'}})
        .then(res => {
            this.setState({ 
                ...this.state, 
                data: res.data 
            });
            
            if(this.state.data.authenticated){
                cookie.set('permissions', 1, {path: '/'});
                this.props.history.push({
                    pathname : "/upload",
                    state : {
                        permissions: res.data.permissions,
                        email: this.state.email,
                    }
                });
            }
            else{
                console.log('failed');
            }
        })

        this.setState({
            email: '',
            password: ''
        });
    };


    render() {
        return (
            <div className="form">
                <form>
                    <input 
                        id='email'
                        placeholder='Email' 
                        value={this.state.email}
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
                
                {/*
                <div className={'nav-items'}>
                    <Link to={place}>
                        <button>Go to upload</button>
                    </Link>
                </div>
                */}

                <p>{JSON.stringify(this.state)}</p>
            </div>
        )
    }

}
