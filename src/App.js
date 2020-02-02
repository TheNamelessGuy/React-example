import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Cookies from 'universal-cookie'

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

  render() {

    const cookies = new Cookies();
    var logout = ''

    if (cookies.get('username') == '')
      logout = <Route path='/logout'><Logout />></Route>

    return (

      <div className="App">
        <Navbar />
        <Router>
          <Route path='/login'>
            <Login />
          </Route>
          <Route exact path='/'>
            <div className='container'>
              <img id='Logo' src={logo} /><h1 id='Welcome'>Welcome</h1>
            </div>
          </Route>
          <Route path='/tools/add'>
            <AddTools />
          </Route>
          <Route path='/registration'>
            <Registration />
          </Route>
          <Route path='/tools/list'>
          <Tools />
        </Route>
        {logout}
        </Router>
      </div>
    );
  }
}

export default App;
