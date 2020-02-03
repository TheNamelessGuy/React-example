import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import logo from '../logo.svg'
import './Navbar.sass';

class Navbar extends Component {

    render() {

        const cookies = new Cookies();
        const username = cookies.get('username');
        var profile = '';

        if (username)
            profile = <a id='Profile' className='nav-link' href='/logout'>{username}</a>
        else 
            profile = <a id='Profile' className='nav-link' href='/login'>Login<span className='sr-only'>(current)</span></a>


        return (
            
            <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
                <div className='container'>
                    <a className='navbar-brand' href=''><img src={logo} /></a>
                    <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarText' aria-controls='navbarText' aria-expanded='false' aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon' />
                    </button>
                    <div className='collapse navbar-collapse' id='navbarText'>
                        <Router>
                            <Route exact path='/'>
                                <ul className='navbar-nav mr-auto'>
                                    <li className='nav-item active'>
                                        <a className='nav-link' href='/'>Home <span className='sr-only'>(current)</span></a>
                                    </li>
                                    <li className='nav-item'>
                                        <a className='nav-link' href='/tools/list'>Tools</a>
                                    </li>
                                    <li className='nav-item'>
                                        <a className='nav-link' href='/tools/add'>Add tools</a>
                                    </li>
                                </ul>
                                <span className='navbar-text'>
                                    <ul className='navbar-nav mr-auto'>
                                        <li className='nav-item'>
                                            {profile}
                                        </li>
                                    </ul>
                                </span>
                            </Route>
                            <Route path='/tools/list'>
                                <ul className='navbar-nav mr-auto'>
                                    <li className='nav-item'>
                                        <a className='nav-link' href='/'>Home <span className='sr-only'>(current)</span></a>
                                    </li>
                                    <li className='nav-item active'>
                                        <a className='nav-link' href='/tools/list'>Tools</a>
                                    </li>
                                    <li className='nav-item'>
                                        <a className='nav-link' href='/tools/add'>Add tools</a>
                                    </li>
                                </ul>
                                <span className='navbar-text'>
                                    <ul className='navbar-nav mr-auto'>
                                        <li className='nav-item'>
                                            {profile}
                                        </li>
                                    </ul>
                                </span>
                            </Route>
                            <Route path='/tools/add'>
                                <ul className='navbar-nav mr-auto'>
                                    <li className='nav-item'>
                                        <a className='nav-link' href='/'>Home <span className='sr-only'>(current)</span></a>
                                    </li>
                                    <li className='nav-item'>
                                        <a className='nav-link' href='/tools/list'>Tools</a>
                                    </li>
                                    <li className='nav-item active'>
                                        <a className='nav-link' href='/tools/add'>Add tools</a>
                                    </li>
                                </ul>
                                <span className='navbar-text'>
                                    <ul className='navbar-nav mr-auto'>
                                        <li className='nav-item'>
                                            {profile}
                                        </li>
                                    </ul>
                                </span>
                            </Route>
                            <Route path='/login'>
                                <ul className='navbar-nav mr-auto'>
                                    <li className='nav-item'>
                                        <a className='nav-link' href='/'>Home <span className='sr-only'>(current)</span></a>
                                    </li>
                                    <li className='nav-item'>
                                        <a className='nav-link' href='/tools/list'>Tools</a>
                                    </li>
                                    <li className='nav-item'>
                                        <a className='nav-link' href='/tools/add'>Add tools</a>
                                    </li>
                                </ul>
                                <span className='navbar-text'>
                                    <ul className='navbar-nav mr-auto'>
                                        <li className='nav-item active'>
                                            {profile}
                                        </li>
                                    </ul>
                                </span>
                            </Route>
                            <Route path='/registration'>
                                <ul className='navbar-nav mr-auto'>
                                    <li className='nav-item'>
                                        <a className='nav-link' href='/'>Home <span className='sr-only'>(current)</span></a>
                                    </li>
                                    <li className='nav-item'>
                                        <a className='nav-link' href='/tools/list'>Tools</a>
                                    </li>
                                    <li className='nav-item'>
                                        <a className='nav-link' href='/tools/add'>Add tools</a>
                                    </li>
                                </ul>
                                <span className='navbar-text'>
                                    <ul className='navbar-nav mr-auto'>
                                        <li className='nav-item active'>
                                            {profile}
                                        </li>
                                    </ul>
                                </span>
                            </Route>
                        </Router>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;
