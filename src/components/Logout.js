import React, { Component } from 'react';
import { Redirect } from 'react-router';
import Cookies from 'universal-cookie';

import logo from '../logo.svg';
//import './Logout.sass'

class Logout extends Component {

    render() {

        /*const cookies = new Cookies();
        cookies.remove('username');*/

        return (
            <div>
                <Redirect to='/' />
            </div>
        );
    }
}

export default Logout;
