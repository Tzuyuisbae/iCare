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
        active: 0,
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

    queryNeeds = () => {
        this.setState({
            active: 0
        })
    };

    queryServices = () => {
        this.setState({
            active: 1
        })
    };

    monthlyServices = () => {
        this.setState({
            active: 2
        })
    };

    render() {
        const cookie = new Cookies();
        const disp = [(<div>
                    <h1>Query Needs</h1>
                    <CustomQueryNeeds />
                </div>), 
            (<div>
                <h1>Query Services</h1>
                <CustomQueryServices />
            </div>), 
            (<div>
                <h1>Query Monthly Services</h1>
                <CustomQueryMonthly />
            </div>)];
        const display=(disp[this.state.active])
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
                    <Query />
                    <div>
                        <span onClick={() => this.queryNeeds()} className={`${(this.state.active === 0) ? 'on' : ''} option`}>Query Needs</span>
                        <span onClick={() => this.queryServices()} className={`${(this.state.active === 1) ? 'on' : ''} option`}>Query Services</span>
                        <span onClick={() => this.monthlyServices()} className={`${(this.state.active === 2) ? 'on' : ''} option`}>Query Monthly Services</span>
                    </div>
                    {display}
                </div>
            </Page>
        )
    }

}
