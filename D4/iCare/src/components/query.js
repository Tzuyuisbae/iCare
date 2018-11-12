import React, { Component } from 'react';
import { JsonToTable } from "react-json-to-table";
import axios from 'axios';


export default class Query extends Component {

    constructor() {
        super();
        // data : []
        this.state = { data : [] }//{"Processing Details":"[BUID:305939,RID:,ORP:4/5,DTS:2018-08-07 10:05:04][1] (Client) Unable to validate against database. / (Client) Impossible de valider dans la base de données.","Unique Identifier":"FOSS/GCMS Client ID","Unique Identifier Value":1234567,"Date of Birth (YYYY-MM-DD)":"1978-05-20T04:00:00.000Z","Phone Number":"902-628-1285","Does the Client Have an Email Address":"Yes","Email Address":"hnestor@cathcrosscultural.org","Street Number":1256,"Street Name":"College","Street Type":"Abbey","Street Direction":"E - East","Unit/Suite/Apt":205,"City":"Toronto","Province":"Ontario","Postal Code":"M6G3A4","Official Language of Preference":"English","Consent for Future Research/Consultation":"Yes"} };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        axios.get('http://localhost:8000/query')
        .then(res => {
            this.setState({ data: res.data });
          })
    }

    render() {
        return (
            <div>
                <button onClick={this.onClick}>QUERY </button>
                <JsonToTable json={this.state.data} /> 
            </div>
        
        );
      }



}