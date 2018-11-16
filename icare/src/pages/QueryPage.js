import React from 'react';
import '../css/main.css';
import Navbar from '../components/Navbar';
import Cookies from 'universal-cookie';



export default class QueryPage extends React.Component {

    state = {
        sql : '',
        query: '',
    }

    updateQueryPage = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        });
    };

    onSubmit = e => {
        e.preventDefault();
        this.setState({
            query : '',
            sql : this.state.query,
        });
    }
    
    render() {
        const cookie = new Cookies();
        return (
            <div className="query">
                <Navbar permissions={cookie.get('permissions')} />
                <form>
                    <input 
                        id='query'
                        placeholder='Insert SQL query here' 
                        value={this.state.query}
                        onChange={e => this.updateQueryPage(e)}
                    />
                    <br />
                    <button onClick={e => this.onSubmit(e)}>Submit</button>
                </form>

                <p>{JSON.stringify(this.state)}</p>
            </div>
        )
    }

}
