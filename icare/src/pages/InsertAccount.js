import React from 'react';
import Navbar from '../components/Navbar';
import Cookies from 'universal-cookie';

export default class InsertAccount extends React.Component {
    render() {
        const cookie = new Cookies();

        return (
            <div className="insertAccount">
                <Navbar permissions={cookie.get('permissions')}/>
                <InsertAccount />
            </div>
            
        );
    }

}