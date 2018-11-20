import React, { Component } from 'react';
import { JsonToTable } from "react-json-to-table";
import Download from '../components/download';
import axios from 'axios';
import Cookies from 'universal-cookie';
import Dropdown from 'react-dropdown';


export default class Query extends Component {

    constructor() {
        super();
        // data : []
        this.state = { queries : {}, data: [], menuOptions: []};
        this.onSelect = this.onSelect.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        const cookie = new Cookies();

        axios.post('http://localhost:8000/getSavedPresetQueries', 
            {email:cookie.get('email')},
            {headers :{'Content-Type': 'application/json'}})
        .then (res => {
            this.setState({queries : res.data});
            this.setState({menuOptions : Object.keys(res.data)});
        });
    }

    onSelect(option) {
        axios.post('http://localhost:8000/customquery', 
            {sql: this.state.queries[option]}
        ).then((res) => {
            this.setState({data: res.data});
        });
    }

    render() {
        return (
            <div>
                <Dropdown options={this.state.menuOptions} onChange={this.onSelect} placeholder="Select an option" />
                <h2>{JSON.stringify(this.state.data[0])}</h2>
                <JsonToTable json={this.state.data} /> 
                <Download data={this.state.data} />
            </div>
        
        );
      }
}