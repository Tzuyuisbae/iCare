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
      this.setState({uploadStatus: files[0].name});
      
      const config = { headers: { 'Content-Type': 'multipart/form-data' } };
      const url = "http://localhost:8000/upload";
      let fd = new FormData();

      fd.append('file', files[0]);
      fd.append('filename', files[0].name);

      axios.post(url, fd, config)
            .then(function (res) {
              // File uploaded successfully
              console.log(res.data);
            })
            .catch(function (err) {
              console.error('err', err);
            });
    }
    render() {
      return (
        <Dropzone onDrop={(files) => this.onDrop(files)}>
            <div>Try dropping some files here, or click to select files to upload. {this.state.uploadStatus}</div>
        </Dropzone>
      )
    }
  }
  
