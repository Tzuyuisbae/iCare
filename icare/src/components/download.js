import React, { Component } from 'react';
import axios from 'axios';

export default class Download extends Component {

    constructor(props) {
        super(props);
        // data : []
        this.onClick = this.onClick.bind(this);
    }

    onClick() {

        // axios({
        //     url: 'http://localhost:8000/download',
        //     method: 'POST',
        //     responseType: 'blob' // important
        axios.post('http://localhost:8000/download',
        {'query' : this.props.data},
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
        if (this.props.data === undefined || this.props.data.length !== 0) {
            downloadButton = <button onClick={this.onClick}> DOWNLOAD</button>;
        } else {
            downloadButton = '';
        }
        return (
            <div>
                {downloadButton}
            </div>
        
        );
      }
}