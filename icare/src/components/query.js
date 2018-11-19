import React, { Component } from 'react';
import { JsonToTable } from "react-json-to-table";
import Download from '../components/download';
import axios from 'axios';


export default class Query extends Component {

    constructor() {
        super();
        // data : []
        this.state = { data : []};
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        axios.get('http://localhost:8000/query')
        .then(res => {
            this.setState({ data: res.data});
          })
    }

    render() {

        return (
            <div>
                <button onClick={this.onClick}>QUERY </button>
                <h2>{JSON.stringify(this.state.data[0])}</h2>
                <JsonToTable json={this.state.data} /> 
                <Download data={this.state.data} />
            </div>
        
        );
      }
}