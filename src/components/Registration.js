import React, { Component } from 'react';

import logo from '../logo.svg'
//import './Registration.sass'

class Registration extends Component {

  render() {

    return (

      <div className='container'>
        <form>
            <div className="form-group">
                <label htmlFor="Username">Username</label>
                <input type="text" className="form-control" id="Username" aria-describedby="emailHelp" />
            </div>
            <div className="form-group">
                <label htmlFor="Email">Email address</label>
                <input type="email" className="form-control" id="Email" aria-describedby="emailHelp" />
            </div>
            <div className="form-group">
                <label htmlFor="ConfirmEmail">Confirm email address</label>
                <input type="email" className="form-control" id="ConfirmEmail" aria-describedby="emailHelp" />
            </div>
            <div className="form-group">
                <label htmlFor="Password">Password</label>
                <input type="password" className="form-control" id="Password" />
            </div>
            <div className="form-group">
                <label htmlFor="ConfirmPassword">Confirm password</label>
                <input type="password" className="form-control" id="ConfirmPassword" />
            </div>
            <button type="submit" className="btn btn-primary">Register</button>
        </form>
      </div>
    );
  }
}

export default Registration;
