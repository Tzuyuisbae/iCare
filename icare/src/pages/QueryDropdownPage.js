import React from 'react';
import Query from '../components/query';
import Page from '../Page';
import Cookies from 'universal-cookie';
import Navbar from '../components/Navbar';

export default class QueryDropdownPage extends React.Component {

    render() {
        const cookie = new Cookies();
        return(
            <Page className="fullblue">
                <div className="topleft">
                    <p className="iCareWhite">iCare</p>
                </div>
                <Navbar permissions={cookie.get('permissions')} />
                <Query />
            </Page>
        );
    }
}