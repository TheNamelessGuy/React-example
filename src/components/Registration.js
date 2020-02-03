import React, { Component } from 'react';
import { Redirect } from 'react-router';

import logo from '../logo.svg'
//import './Registration.sass'

class Registration extends Component {

  constructor() {

    super();

    this.state = {
      username: '',
      email: '',
      confirm_email: '',
      password: '',
      confirm_password: '',
      redirect: false
    }
  }

  handleUsernameChange = (e) => {

    this.setState({
      username: e.target.value
    });
  }

  handleEmailChange = (e) => {

    this.setState({
      email: e.target.value
    });
  }

  handleConfirmEmailChange = (e) => {

    this.setState({
      confirm_email: e.target.value
    });
  }

  handlePasswordChange = (e) => {

    this.setState({
      password: e.target.value
    });
  }

  handleConfirmPasswordChange = (e) => {

    this.setState({
      confirm_password: e.target.value
    });
  }

  handleSubmit = (e) => {

    if (this.state.email == this.state.confirm_email && this.state.password == this.state.confirm_password) {

      var users = JSON.parse(localStorage.getItem('users.json'));
      let id_counter = 1;

      for (const user in users.users) 
        id_counter++;

      users.users.push({ "id": id_counter, "Username": this.state.username, "Email": this.state.email, "Password": this.state.password });

      localStorage.setItem('users.json', JSON.stringify(users));

      this.setState({
        redirect: true
      });

    } else {

      alert("Passwords or emails do not match!");
    }
  }

  render() {

    if (this.state.redirect)
      return <Redirect to='/login' />

    return (

      <div className='container'>
        <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label htmlFor="Username">Username</label>
                <input type="text" className="form-control" id="Username"  onChange={this.handleUsernameChange} />
            </div>
            <div className="form-group">
                <label htmlFor="Email">Email address</label>
                <input type="email" className="form-control" id="Email" aria-describedby="emailHelp" onChange={this.handleEmailChange} />
            </div>
            <div className="form-group">
                <label htmlFor="ConfirmEmail">Confirm email address</label>
                <input type="email" className="form-control" id="ConfirmEmail" aria-describedby="emailHelp" onChange={this.handleConfirmEmailChange} />
            </div>
            <div className="form-group">
                <label htmlFor="Password">Password</label>
                <input type="password" className="form-control" id="Password" onChange={this.handlePasswordChange} />
            </div>
            <div className="form-group">
                <label htmlFor="ConfirmPassword">Confirm password</label>
                <input type="password" className="form-control" id="ConfirmPassword" onChange={this.handleConfirmPasswordChange} />
            </div>
            <button type="submit" className="btn btn-primary">Register</button>
        </form>
      </div>
    );
  }
}

export default Registration;
