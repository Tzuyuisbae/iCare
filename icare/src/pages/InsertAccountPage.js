import React from 'react';
import Navbar from '../components/Navbar';
import Cookies from 'universal-cookie';
import InsertAccount from '../components/insertAccount';
import Page from '../Page';

export default class InsertAccountPage extends React.Component {
    render() {
        const cookie = new Cookies();

        return (
            <Page className="fullblue">
                <div className="topleft">
                    <p className="iCareWhite">iCare</p>
                </div>
                <Navbar permissions={cookie.get('permissions')} />
                <InsertAccount />
            </Page>
        );
    }

}