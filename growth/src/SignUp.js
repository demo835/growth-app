import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class SignUp extends Component {
    constructor() {
        super()

        this.state = {
            firstName: "",
            lastName: "",
            password: "",
            email: "",
            male: false,
            children: "",
    }
    }

    onChange = e => {
        // const state = this.state
        // state[e.target.name] = e.target.value
        // this.setState(state)

        // const state = this.state
        // console.log("e is", e)
        // const tempE = e.target.name
        // state.tempE = e.target.value
        // this.setState(state)  
        // console.log("this.state is", this.state)

        this.setState({ [e.target.name]: e.target.value });
        console.log("this.state is", this.state)
      }
    
      onSubmit = e => {
        console.log("submit clicked");
        let data = JSON.stringify({
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          password: this.state.password,
          email: this.state.email,
          male: this.state.male,
          children: this.state.children
        })
        console.log("data is", data)
        axios.post("https://growth-mb.herokuapp.com/signup/new", data, {
          headers: {
            "Content-Type": "application/json"
          }
        })
        
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12">
                    <div className="card">
                        <div className="card-content black-text">
                        <form id="reg-form" onSubmit={this.onSubmit}>
                        <div className="row">
                            <div className="input-field col s6">
                            <input id="first_name" name="firstName" type="text" className="validate" onChange={this.onChange} required></input>
                            <label htmlFor="first_name">First Name</label>
                            </div>
                            <div className="input-field col s6">
                            <input id="last_name" name="lastName" type="text" className="validate" onChange={this.onChange} required></input>
                            <label htmlFor="last_name">Last Name</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="children" name="children" type="text" className="validate" onChange={this.onChange}required></input>
                                <label htmlFor="children">Children</label>
                            </div>
                            {/* <div class="input-field col s12">
                            <input id="email" type="email" class="validate" required></input>
                            <label for="email">Email</label>
                            </div> */}
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                            <input id="password1" name="password1" type="password" className="validate" minLength="6" required></input>
                            <label htmlFor="password">Password</label>
                            </div>
                            <div className="input-field col s6">
                            <input id="password" name="password" type="password" className="validate" onChange={this.onChange} minLength="6" required></input>
                            <label htmlFor="password">Re-enter Password</label>
                            </div>
                        </div>
                        <div className="row">
                            {/* <div class="input-field col s6">
                            <div class="gender-male">
                                <input class="with-gap" name="gender" type="radio" id="male" reqsuired></input>
                                <label for="male">Male</label>
                            </div>
                            <div class="gender-female">
                                <input class="with-gap" name="gender" type="radio" id="female" required ></input>
                                <label for="female">Female</label>
                            </div>
                            </div> */}
                            

                            <div className="input-field col s6">
                            <Link to="/show">
                                {/* <a href="/signup"> */}
                                <button className="btn btn-large btn-register waves-effect waves-light" type="submit" name="action" form="reg-form" onClick={this.onSubmit}>Register
                                <i className="material-icons right">done</i>
                                </button>
                                {/* </a> */}
                            </Link>
                            </div>
                        </div>
                        </form>
                    </div>
                    </div>
                    </div>
                </div>
                {/* <Link to="/"><a title="Login" className="ngl btn-floating btn-large waves-effect waves-light red"><i className="material-icons">input</i></a></Link> */}
        </div>

        )
    }
}

export default SignUp