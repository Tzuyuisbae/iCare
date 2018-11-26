import React from 'react';
import '../css/main.css';
import '../css/Page.css';
import '../css/login.css';
import Navbar from '../components/Navbar';
import Query from '../components/query';
import CustomQueryNeeds from '../components/customQueryNeeds';
import CustomQueryServices from '../components/customQueryServices';
import CustomQueryMonthly from '../components/customQueryMonthly';
import Cookies from 'universal-cookie';
import axios from 'axios';
import { JsonToTable } from "react-json-to-table";
import Page from "../Page";


export default class QueryPage extends React.Component {

    state = {
        sql: '',
        data: {},
    }

    updateQueryPage = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        });
    };

    onSubmit = e => {
        e.preventDefault();
        axios.get('http://localhost:8000/query', 
            {params: {sql: this.state.sql}}
        ).then((res) => {
            console.log(this.state.sql);
            this.setState({data: res.data});
        });

        this.setState({sql : ''});
    }

    render() {
        const cookie = new Cookies();
        return (
            <Page className="lilblue">
                <Navbar permissions={cookie.get('permissions')} />
                <div className="topleft">
                    <p className="iCareWhite">iCare</p>
                </div>
                <div className="query">
                    <div className="error">{this.state.error}</div>
                    <form>
                        <div className="wrapSearch">
                            <input 
                                id='sql'
                                placeholder='Insert SQL query here' 
                                value={this.state.sql}
                                onChange={e => this.updateQueryPage(e)}
                                className="input"
                            />
                            <img className="search" src={require("../images/search.png")} onClick={e => this.onSubmit(e)} />
                        </div>
                    </form>

                    {/* <p>{JSON.stringify(this.state)}</p> */}
                    <JsonToTable json={this.state.data} />
                    <br/>
                    <Query />
                    <br />
                    <h1>Custom Query Needs</h1>
                    <CustomQueryNeeds />
                    <h1>Custom Query Services</h1>
                    <CustomQueryServices />
                    <h1>Custom Query Monthly</h1>
                    <CustomQueryMonthly />
                </div>
            </Page>
        )
    }

}
