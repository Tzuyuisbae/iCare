import React from 'react';
import Navbar from '../components/Navbar';
import Cookies from 'universal-cookie';
import InsertAccount from '../components/insertAccount';

export default class InsertAccountPage extends React.Component {
    render() {
        const cookie = new Cookies();

        return (
            <div className="InsertAccountPage">
                <Navbar permissions={cookie.get('permissions')} />
                <InsertAccount />
            </div>
            
            
        );
    }

}