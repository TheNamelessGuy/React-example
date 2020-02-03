import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Cookies from 'universal-cookie'
import users from './database/users.json';
import tools from './database/tools.json';

import Navbar from './components/Navbar';
import Login from './components/Login';
import AddTools from './components/AddTools';
import Registration from './components/Registration';
import Tools from './components/Tools';
import Logout from './components/Logout';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import logo from './logo.svg';

class App extends Component {

  constructor() {

    super();

    localStorage.setItem('users.json', JSON.stringify(users));
    localStorage.setItem('tools.json', JSON.stringify(tools));
  }

  render() {

    const cookies = new Cookies();
    const username = cookies.get('username');
    var logout = '';
    var login = '';

    if (username)
      logout = <Route path='/logout'><Navbar /><Logout /></Route>
    else
      login = <Route path='/login'><Navbar /><Login /></Route> 

    return (

      <div className="App">
        <Router>
          {login}
          <Route exact path='/'>
            <Navbar />
            <div className='container'>
              <img id='Logo' src={logo} /><h1 id='Welcome'>Welcome</h1>
            </div>
          </Route>
          <Route path='/tools/add'>
            <Navbar />
            <AddTools />
          </Route>
          <Route path='/registration'>
            <Navbar />
            <Registration />
          </Route>
          <Route path='/tools/list'>
            <Navbar />
            <Tools />
          </Route>
        {logout}
        </Router>
      </div>
    );
  }
}

export default App;
