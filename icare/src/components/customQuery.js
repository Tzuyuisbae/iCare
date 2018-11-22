import React, { Component } from 'react';
import { Checkbox, CheckboxGroup } from 'react-checkbox-group';
import { JsonToTable } from "react-json-to-table";
import Download from '../components/download';
import axios from 'axios';
import Cookies from 'universal-cookie';
import Dropdown from 'react-dropdown';


export default class CustomQuery extends Component {

    constructor(props) {
        super(props);
        // data : []
        this.state = {
            options: [],
            selected: [],
            query: this.props.query,
            queryData: [],
            month : 'hello',
            year : '2018',
        }
        this.componentDidMount = this.componentDidMount.bind(this);
        this.updateDate = this.updateDate.bind(this);
        this.handleCheckboxes = this.handleCheckboxes.bind(this);
    }

    handleCheckboxes = (selected) => {
        this.setState({
            selected: selected
        });
    }

    updateDate = e => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };

    
    onRetrieveQuery = e => {
        e.preventDefault();

        if (this.state.selected.length == 0) {
            alert('Please select an option')
        } else {

            axios.post('http://localhost:8000/customQuery',
                { 'options': this.state.selected, 'date': [this.state.month, this.state.year] },
                { headers: { 'Content-Type': 'application/json' } })
                .then(res => {
                    if (res.data.length == 0) {
                        alert('An error has occured. Please make sure the input is valid');
                    } else {
                        this.setState({queryData : res.data})
                    }
                });
        }
    };

    componentDidMount() {

        axios.get('http://localhost:8000/getCustomQueryOptions',
            { params: { query: this.state.query} })
            .then(res => {
                this.setState({ options: res.data });
            });
    }

    render() {
        // the checkboxes can be arbitrarily deep. They will always be fetched and
        // attached the `name` attribute correctly. `value` is optional
        let checkOptions = [];
        for (var i = 0; i < this.state.options.length; i++ ) {
            checkOptions.push(<label><Checkbox value={this.state.options[i]} /> {this.state.options[i]} <br /></label>);
        }

        const d = new Date();
        const y = d.getFullYear();

        return (
            <div>
                <CheckboxGroup
                    checkboxDepth={2} // This is needed to optimize the checkbox group
                    name="options"
                    value={this.state.selected}
                    onChange={this.handleCheckboxes}>
                    {checkOptions}
                </CheckboxGroup>
                <br />
                <select id="month" value={this.state.month} onChange={this.updateDate}>
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
                    onChange={e => this.updateDate(e)}
                />
                <br />
                <button onClick={e => this.onRetrieveQuery(e)}>Query data </button>
                <p>{JSON.stringify(this.state)}</p>
                <JsonToTable json={this.state.queryData} />

            
            </div>
        );
    }

}