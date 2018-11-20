import React from 'react';
export default class Dropdown extends React.Component {

    parse() {
        let options = [];
        let parentOptions = this.props.options;
        for (let i = 0; i < parentOptions.length; i++) {
            options.push(<option value={parentOptions[i]}>{parentOptions[i]}</option>);
        }
        return options;
    }

    render() {
        return(
            <div className="sql-builder">
                <select multiple size='5'>
                    {this.parse()}
                </select>
            </div>
        );
    }

}