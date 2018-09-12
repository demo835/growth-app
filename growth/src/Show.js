import React, { Component } from 'react'
import axios from 'axios'
import Name from "./Name"
import Conditions from "./Conditions"
import Vaccinations from "./Vaccinations"
import DropDown from "./DropDown"
import "./Show.css"

class Show extends Component {
    constructor() {
        super()

        this.state = {
            patient: null,
            user: null
          }
    }

    componentDidMount() {
        console.log("componentWillMount")
        axios.get("http://localhost:3001/patients/5b97fecb281ffa2ead71e9b3").then(data => {
          // console.log("get event data from axios...");
          // console.log(data.data);
          this.setState({ patient: data.data });
          // console.log("inside componentwillmount App");
        })
    
        axios.get("http://localhost:3001/user").then(data2 => {
          this.setState({ user: data2.data })
        })
    }

    render() {

        if ((!this.state.patient) || (!this.state.user)) {
            return null
        }
        else
        {
        return (
            <div className="showContainer">
                {/* <nav className="navContainer">
                    <DropDown user={this.state.user}/>
                </nav> */}
                <div className="leftContainer">
                    <Name patient={this.state.patient}/>
                </div>
                <div className="rightContainer">
                    <DropDown user={this.state.user}/>
                    <Conditions conditions={this.state.patient}/>
                    <Vaccinations vaccinations={this.state.patient}/>
                </div>
            </div>
        )
        }
    }
}

export default Show