import React, { Component } from 'react'
import { 
    BrowserRouter as Router,
    Route, 
    Link, 
    Redirect, 
    Switch }
    from "react-router-dom"
import "./LogIn.css"

class LogIn extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div id="login-page" className="row">
                {/* <img src="../../public/images/beach-children-family.jpg" </img> */}
                <div className="col s12 z-depth-6 card-panel">
                <form className="login-form">
                    
                    <div className="row">
                    </div>
                    <div className="row">
                    <div className="input-field col s12">
                        <i className="material-icons prefix">mail_outline</i>
                        <input className="validate" id="email" type="email"></input>
                        <label htmlFor="email" data-error="wrong" data-success="right">Email</label>
                    </div>
                    </div>
                    <div className="row">
                    <div className="input-field col s12">
                        <i className="material-icons prefix">lock_outline</i>
                        <input id="password" type="password"></input>
                        <label htmlFor="password">Password</label>
                    </div>
                    </div>
                    <div className="row">          
                    <div className="input-field col s12 m12 l12  login-text">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    </div>
                    <div className="row">
                    <div className="input-field col s12">
                        <Link to="/show"><a href="#" className="btn
    waves-effect waves-light #ffeb3b yellow col s12">Login</a></Link>
                    </div>
                    </div>
                    <div className="row">
                    <div className="input-field col s6 m6 l6">
                        <Link to="/signup"><p className="margin medium-small"><a href="#">Create Account!</a></p></Link>
                    </div>
                    <div className="input-field col s6 m6 l6">
                        <p className="margin right-align medium-small"><a href="#">Forgot password?</a></p>
                    </div>          
                    </div>

                </form>
            </div>
        </div>
        )
    }
}

export default LogIn