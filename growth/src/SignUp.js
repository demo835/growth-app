import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SignUp extends Component {
    constructor() {
        super()

    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12">
                    <div className="card">
                        <div className="card-content black-text">
                        <form id="reg-form">
                        <div className="row">
                            <div className="input-field col s6">
                            <input id="first_name" type="text" className="validate" required></input>
                            <label htmlFor="first_name">First Name</label>
                            </div>
                            <div className="input-field col s6">
                            <input id="last_name" type="text" className="validate" required></input>
                            <label htmlFor="last_name">Last Name</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                            <input id="email" type="email" class="validate" required></input>
                            <label for="email">Email</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                            <input id="password" type="password" class="validate" minlength="6" required></input>
                            <label for="password">Password</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s6">
                            <div class="gender-male">
                                <input class="with-gap" name="gender" type="radio" id="male" required></input>
                                <label for="male">Male</label>
                            </div>
                            <div class="gender-female">
                                <input class="with-gap" name="gender" type="radio" id="female" required ></input>
                                <label for="female">Female</label>
                            </div>
                            </div>

                            <div class="input-field col s6">
                            <Link to="/signup/new"><button class="btn btn-large btn-register waves-effect waves-light" type="submit" name="action">Register
                                <i class="material-icons right">done</i>
                            </button></Link>
                            </div>
                        </div>
                        </form>
                    </div>
                    </div>
                    </div>
                </div>
                <Link to="/"><a title="Login" class="ngl btn-floating btn-large waves-effect waves-light red"><i class="material-icons">input</i></a></Link>
        </div>

        )
    }
}

export default SignUp