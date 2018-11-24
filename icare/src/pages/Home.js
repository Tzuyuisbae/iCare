import React from 'react';
import iCareLogo from "../images/iCare.png";
import Page from "../Page";
import Navbar from '../components/Navbar';
import Cookies from 'universal-cookie';

export default class Home extends React.Component {

    render() {
        const cookie = new Cookies();
        return(
            <div className="Home">
                <Navbar permissions={cookie.get('permissions')} />
                <div>Welcome to Icare!!!!</div>
            </div>
        );
    }
}