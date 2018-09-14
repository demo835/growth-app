import React, { Component } from 'react'
import { 
    Link }
    from "react-router-dom"
import "./LogIn.css"

class LogIn extends Component {

    render() {
        return (
            // <div>
                <div id="login-page" className="row">
                {/* <div className=""> */}
                    <h2 className="font">| Growth |</h2>
                {/* </div> */}
                {/* <img src="../../public/images/beach-children-family.jpg" </img> */}
                <div className=" z-depth-6 card-panel">
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
                        <Link to="/show"><button className="btn
    waves-effect waves-light #ffeb3b red col s12">Login</button></Link>
                        {/* <Link to="/show"><a href="#" className="btn
    waves-effect waves-light #ffeb3b yellow col s12">Login</a></Link> */}
                    </div>
                    </div>
                    <div className="row">
                    <div className="input-field col s6 m6 l6">
                        <Link to="/signup"><p className="margin medium-small links">Create Account!</p></Link>
                    </div>
                    <div className="input-field col s6 m6 l6">
                        <p className="margin right-align medium-small links">Forgot password?</p>
                    </div>          
                    </div>

                </form>
            </div>
        </div>
        // </div>
        )
    }
}

export default LogIn