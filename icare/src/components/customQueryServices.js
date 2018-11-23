import React, { Component } from 'react';
import { Checkbox, CheckboxGroup } from 'react-checkbox-group';
import { JsonToTable } from "react-json-to-table";
import Download from './download';
import axios from 'axios';
import Cookies from 'universal-cookie';
import Dropdown from 'react-dropdown';


export default class CustomQueryServices extends Component {

    constructor() {
        super();
        // data : []
        this.state = {
            service: 'community',
            services: [],
            groupByValues: [],
            groupBySelected: [],
            queryData: [],
            month: 'JAN',
            year: '2018',
        }
        this.componentDidMount = this.componentDidMount.bind(this);
        this.updateMenu = this.updateMenu.bind(this);
        this.handleOptionCheckbox = this.handleOptionCheckbox.bind(this);
        this.handleGroupByCheckbox = this.handleGroupByCheckbox.bind(this);
        this.onRetrieveQuery = this.onRetrieveQuery.bind(this);
    }

    handleOptionCheckbox = (optionsSelected) => {
        this.setState({
            optionsSelected: optionsSelected
        });
    }

    handleGroupByCheckbox = (groupBySelected) => {
        this.setState({
            groupBySelected: groupBySelected
        });
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
        } else if (this.state.groupBySelected.length === 0){
            alert('Please choose a field to sort by')
        } else {

            axios.post('http://localhost:8000/customQueryServices',
                { 'service': this.state.service,
                'date': [this.state.month, this.state.year],
                'groupBySelected': this.state.groupBySelected },
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
            { params: { queryID: 'services' } })
            .then(res => {
                this.setState({ services: res.data.services, groupByValues: res.data.groupBy });
            });
    }

    render() {
        // the checkboxes can be arbitrarily deep. They will always be fetched and
        // attached the `name` attribute correctly. `value` is optional
        let checkOptions = [];
        let groupByOptions = [];
        let groupByHeader = '';

        groupByHeader = <h1>Sort By:</h1>;
        for (var i = 0; i < this.state.groupByValues.length; i++) {
            groupByOptions.push(<label><Checkbox value={this.state.groupByValues[i]} /> {this.state.groupByValues[i]} <br /></label>);
        }

        for (var i = 0; i < this.state.services.length; i++) {
            checkOptions.push(<option value={this.state.services[i]}>{this.state.services[i]}</option>);
        }

        const d = new Date();
        const y = d.getFullYear();

        return (
            <div>
                <p>Select a service: </p>
                <select id="service" onChange={this.updateMenu}>
                    {checkOptions}
                </select>
                <br />
                <select id="month" value={this.state.month} onChange={this.updateMenu}>
                    <option value="JAN">January</option>
                    <option value="FEB">Febuary</option>
                    <option value="MAR">March</option>
                    <option value="APR">April</option>
                    <option value="MAY">May</option>
                    <option value="JUN">June</option>
                    <option value="JUL">July</option>
                    <option value="AUG">August</option>
                    <option value="SEP">September</option>
                    <option value="OCT">October</option>
                    <option value="NOV">November</option>
                    <option value="DEC">December</option>
                </select>
                <input
                    id='year'
                    type="number"
                    min="2017"
                    max={y}
                    value={this.state.year}
                    onChange={e => this.updateMenu(e)}
                />
                <br />
                {groupByHeader}
                <CheckboxGroup
                    checkboxDepth={12} // This is needed to optimize the checkbox group
                    name="groupBy options"
                    value={this.state.groupBySelected}
                    onChange={this.handleGroupByCheckbox}>
                    {groupByOptions}
                </CheckboxGroup>
                <br />
                <button onClick={e => this.onRetrieveQuery(e)}>Query data </button>
                <p>{JSON.stringify(this.state)}</p>
                <JsonToTable json={this.state.queryData} />


            </div>
        );
    }

}