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
        this._onSelect = this._onSelect.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {

        // get user's saved queries from database
        const cookie = new Cookies();

        axios.get('http://localhost:8000/getSavedPresetQueries', 
            {params: {email:cookie.get('email')}})
        .then (res => {
            this.setState({queries : res.data});
            this.setState({menuOptions : Object.keys(res.data)});
        });
    }

    _onSelect (option) {
        // retrieve the query results and display them
        axios.get('http://localhost:8000/query', 
            {params: {sql: this.state.queries[option.label] }})
        .then(res => {
            console.log(this.state.sql);
            this.setState({data: res.data});
        });
    }

    render() {
        return (
            <div>
                <Dropdown options={this.state.menuOptions} onChange={this._onSelect} placeholder="Select an option" />
                <h2>{JSON.stringify(this.state.data[0])}</h2>
                <JsonToTable json={this.state.data} /> 
                <Download data={this.state.data} />
            </div>
        
        );
      }
}