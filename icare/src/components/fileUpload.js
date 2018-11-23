import React from "react";
import Dropzone from "react-dropzone";
import axios from 'axios';

export default class FileUpload extends React.Component {
    
    constructor(props) {
        super(props);
          this.state = {
            uploadStatus: ''
          }
        this.onDrop = this.onDrop.bind(this);
    }
    
    onDrop = (files) => {
      
      const config = { headers: { 'Content-Type': 'multipart/form-data' } };
      const url = "http://localhost:8000/upload";
      let fd = new FormData();

      fd.append('file', files[0]);
      fd.append('filename', files[0].name);

      axios.post(url, fd, config)
            .then( (res) => {
              // File uploaded successfully
              this.setState(this.setState({uploadStatus : JSON.stringify(res.data)}));
            })
            .catch(function (err) {
              console.error('err', err);
            });
      this.props.thanks();
    }

    test = () => {
      this.props.thanks();
    }

    render() {
      return (
        <div>
        <Dropzone accept=".xlsx, .xls" onDrop={(files) => this.onDrop(files)}>
            <div>Click here, or drag an iCare file in this box {this.state.uploadStatus}</div>
        </Dropzone>
        <button onClick={() => this.test()}>Test</button>
        </div>
      )
    }
  }
  
