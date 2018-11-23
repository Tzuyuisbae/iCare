import React, { Component } from 'react';
import { Checkbox, CheckboxGroup } from 'react-checkbox-group';
import { JsonToTable } from "react-json-to-table";
import Download from './download';
import axios from 'axios';
import Cookies from 'universal-cookie';
import Dropdown from 'react-dropdown';


export default class CustomQueryMonthly extends Component {

    constructor() {
        super();
        // data : []
        this.state = {
            service: 'community',
            services: [],
            queryData: [],
            year: '2018',
        }
        this.componentDidMount = this.componentDidMount.bind(this);
        this.updateMenu = this.updateMenu.bind(this);
        this.onRetrieveQuery = this.onRetrieveQuery.bind(this);
    }

    updateMenu = e => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };

    onRetrieveQuery = e => {
        e.preventDefault();

        if (this.state.service.length === 0) {
            alert('Please select a service')
        } else {
            axios.post('http://localhost:8000/customQueryMonthly',
                { 'service': this.state.service,
                'year': this.state.year },
                { headers: { 'Content-Type': 'application/json' } })
                .then(res => {
                    if (res.data == undefined) {
                        alert('An error has occured. Please make sure the input is valid');
                    } else {
                        this.setState({ queryData: res.data })
                    }
                });
        }
    };

    componentDidMount() {
        axios.get('http://localhost:8000/getCustomQueryOptions',
            { params: { queryID: 'monthlyServices' } })
            .then(res => {
                this.setState({ services: res.data.services, groupByValues: res.data.groupBy });
            });
    }

    render() {
        // the checkboxes can be arbitrarily deep. They will always be fetched and
        // attached the `name` attribute correctly. `value` is optional
        let serviceOptions = [];
        for (var i = 0; i < this.state.services.length; i++) {
            serviceOptions.push(<option value={this.state.services[i]}>{this.state.services[i]}</option>);
        }

        const d = new Date();
        const y = d.getFullYear();

        return (
            <div>
                <p>Select a service to get monthly count: </p>
                <select id="service" onChange={this.updateMenu}>
                    {serviceOptions}
                </select>
                <br />
                <input
                    id='year'
                    type="number"
                    min="2017"
                    max={y}
                    value={this.state.year}
                    onChange={e => this.updateMenu(e)}
                />
                <br />
                <button onClick={e => this.onRetrieveQuery(e)}>Query data </button>
                <p>{JSON.stringify(this.state)}</p>
                <JsonToTable json={this.state.queryData} />
            </div>
        );
    }

}