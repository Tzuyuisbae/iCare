import React, { Component } from 'react';
import { Checkbox, CheckboxGroup } from 'react-checkbox-group';
import { JsonToTable } from "react-json-to-table";
import Download from './download';
import axios from 'axios';
import Cookies from 'universal-cookie';
import Dropdown from 'react-dropdown';


export default class SaveQuery extends Component {
    
    constructor(props) {
        super(props);
        // data : []
        this.state = {
            sql : this.props.sql,
            name: '',
        }
        this.updateMenu = this.updateMenu.bind(this);
        this.saveQuery = this.saveQuery.bind(this);
    }


    saveQuery() {

        const isNotValidName = 
            this.state.name === '' || 
            this.state.name.includes("'") || 
            this.state.name.includes('"') || 
            this.state.name.includes('`');

        if (isNotValidName) {
            alert("The name of your query must not be blank! Only alphanumeric characters");
        } else {
            const cookie = new Cookies();

            axios.post('http://localhost:8000/saveQuery',
                { 'email': cookie.get('email'), 'sql': this.props.sql, 'name': this.state.name },
                { headers: { 'Content-Type': 'application/json' } })
                .then(res => {
                    alert(res.data.error);
                });
        }
    }

    updateMenu = e => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };

    render () {

        let body;
        if (this.props.sql === '') {
            body = '';
        } else {
            body = (
                <div>
                    <p>Save Query?</p>
                    <input
                        id='name'
                        type="text"
                        pattern="[A-Za-z0-9]"
                        value={this.state.name}
                        onChange={e => this.updateMenu(e)}
                    />
                    <button onClick={this.saveQuery}>Save Query</button>
                </div>
            )
        }

        return (
            <div>
                {body}
            </div>
        )
    }

}