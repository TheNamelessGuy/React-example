import React, { Component } from 'react';
import { Redirect, BrowserRouter as Router } from 'react-router-dom';
import Cookies from 'universal-cookie';

import logo from '../logo.svg';
//import './Logout.sass'

class Logout extends Component {

    render() {

        const cookies = new Cookies();
        cookies.remove('username');

        return <Redirect to='/' />
    }
}

export default Logout;
