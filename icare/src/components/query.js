import React, { Component } from 'react';
import { JsonToTable } from "react-json-to-table";
import axios from 'axios';


export default class Query extends Component {

    constructor() {
        super();
        // data : []
        this.state = { data : [], downloadable: false };
        this.onClick = this.onClick.bind(this);
        this.onDownload = this.onDownload.bind(this);
    }

    onClick() {
        axios.get('http://localhost:8000/query')
        .then(res => {
            this.setState({ data: res.data, downloadable: true });
          })
    }

    onDownload() {

        // axios({
        //     url: 'http://localhost:8000/download',
        //     method: 'POST',
        //     responseType: 'blob' // important
        axios.post('http://localhost:8000/download',
        {'query' : this.state.data},
        {responseType: 'blob'}
        ).then((response) => {
             const url = window.URL.createObjectURL(new Blob([response.data]));
             const link = document.createElement('a');
             link.href = url;
             link.setAttribute('download', 'test.csv'); //or any other extension
             document.body.appendChild(link);
             link.click();
          });
    }

    render() {
        let downloadButton;
        if (this.state.downloadable) {
            downloadButton = <button onClick={this.onDownload}> DOWNLOAD</button>;
        } else {
            downloadButton = '';
        }

        return (
            <div>
                <button onClick={this.onClick}>QUERY </button>
                <h2>{JSON.stringify(this.state.data[0])}</h2>
                <JsonToTable json={this.state.data} /> 
                {downloadButton}
            </div>
        
        );
      }
}