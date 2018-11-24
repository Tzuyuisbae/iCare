import React from 'react';
import iCareLogo from "../images/iCare.png";
import Page from "../Page";
import Navbar from '../components/Navbar';
import Cookies from 'universal-cookie';

export default class Home extends React.Component {

    render() {
        const cookie = new Cookies();
        return(
            <Page className="fullblue">
                <div className="topleft">
                    <p className="iCareWhite">iCare</p>
                </div>
                <Navbar permissions={cookie.get('permissions')} />
                <div className="pos">
                    <h6 className="welcome">Welcome to the ICare web application!</h6>

                </div>
            </Page>
        );
    }
}