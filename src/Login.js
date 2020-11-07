import fire from './congif';
import React, { Component } from 'react';
import { render } from '@testing-library/react';
import Button from 'react-bootstrap/Button';
import Home from './Home';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './Login.css';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.login = this.login.bind(this);
        this.signup = this.signup.bind(this);
    }
    login(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
            console.log("login", this.state.email);
            this.props.history.push("/home");
            console.log("login", this.state.password);
        }).catch((error) => {
            console.log(error);
        });
    }
    signup(e) {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
            console.log("signup", this.state.email);
            this.props.history.push("/home");
            console.log("signup", this.state.password);
        }).then((u) => { console.log(u) }).catch((error) => {
            console.log(error);
        });
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {
        return (
            <div className="container">

                <form>
                    
                        <div className="row">
                            <div className="col-25">
                                <label>E-mail</label></div>
                            <div className="col-75">
                                <input value={this.state.email} onChange={this.handleChange} type="email" name="email" placeholder="Enter E-mail" />
                            </div>
                        </div>
                   
                    
                        <div className="row">
                            <div className="col-25">
                                <label>Password</label></div>
                            <div className="col-75">
                                <input value={this.state.password} onChange={this.handleChange} type="password" name="password" placeholder="Enter Password" />
                            </div>
                        </div>

                        <div className="row">         
                        <div className="col-25"> <Link to="/home">  <button type="submit" onClick={this.login} className="btn btn-primary">Login</button></Link></div>
                        <div className="col-25"><Link to="/home"><Button onClick={this.signup} className="btn btn-success">SignUp</Button> </Link></div>
                    </div>
                    
                </form>
            </div>
        );
    }
}
export default Login;