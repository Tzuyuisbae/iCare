import React from 'react';
import '../css/main.css';
import Navbar from '../components/Navbar';
import Query from '../components/query';
import CustomQuery from '../components/customQuery';
import Cookies from 'universal-cookie';
import axios from 'axios';
import { JsonToTable } from "react-json-to-table";


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
            <div className="query">
                <Navbar permissions={cookie.get('permissions')} />
                <div className="error">{this.state.error}</div>
                <form>
                    <input 
                        id='sql'
                        placeholder='Insert SQL query here' 
                        value={this.state.sql}
                        onChange={e => this.updateQueryPage(e)}
                    />
                    <br />
                    <button onClick={e => this.onSubmit(e)}>Submit</button>
                </form>

                <p>{JSON.stringify(this.state)}</p>
                <JsonToTable json={this.state.data} />
                <br/>
                <Query />
                <br />
                <CustomQuery queryID='needs'/>
                <CustomQuery queryID='query2'/>
            </div>
        )
    }

}
