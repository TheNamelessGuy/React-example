import React, { Component } from 'react';
import users from '../database/users';
import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';

//import './Login.sass'

class Login extends Component {

    constructor() {

        super();

        this.state = {
            email: '',
            password: '',
            redirect: false
        }
    }

    handleEmailChange = (e) => {

        this.setState({
            email: e.target.value
        });
    }

    handlePasswordChange = (e) => {

        this.setState({
            password: e.target.value
        });
    }

    handleSubmit = (e) => {

        users.Users.map((users) => {

            if (this.state.email == users.Email && this.state.password == users.Password) {

                const cookies = new Cookies();
                cookies.set('username', users.Username);
                this.setState({
                    redirect: true
                });
            }
        });
    }

    render() {

        if (this.state.redirect)
            return <Redirect to='/' />

        return (

            <div className='container'>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={this.handleEmailChange} />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" onChange={this.handlePasswordChange} />
                    </div>
                    <small>Dont have an account yet? Follow <a href='/registration'>this</a> link to create your profile.</small><br/>
                    <br/><button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        );
  }
}

export default Login;
