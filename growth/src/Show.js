import React, { Component } from 'react'
import axios from 'axios'
import Name from "./Name"
import Conditions from "./Conditions"
import Vaccinations from "./Vaccinations"
import DropDown from "./DropDown"
import boy from "./boy1.png"
import "./Show.css"

class Show extends Component {
    constructor(props) {
        super(props)

        this.state = {
            patient: null,
            user: null
          }
    }

    componentDidMount() {
        console.log("componentDidMount in Show.js")
        axios.get("https://growth-mb.herokuapp.com/patients").then(data => {
          // console.log("get event data from axios...");
          // console.log(data.data);
          console.log("data is", data)
          this.setState({ patient: data.data[0] });
          // console.log("inside componentwillmount App");
        })
    
        axios.get("https://growth-mb.herokuapp.com/user").then(data2 => {
            console.log("data2 is ", data2)
          this.setState({ user: data2.data[0] })
        })
    }

    render() {
        // If we have neither data
        if (!this.state.patient && !this.state.user) {
            return null
        }
        else if (this.state.patient && !this.state.user) {
            let that = this
            setTimeout(function(){ 
                axios.get("https://growth-mb.herokuapp.com/user").then(data2 => {
                console.log("In timeout backup. data2 is ", data2)
                that.setState({ user: data2.data[0] })
            }, 1000)
            })
            return null
        }
        else {
            // console.log("From Show ELSE. Moving forward with render")
            // console.log("From Show ELSE. this.state.user is ", this.state.user)
            // console.log("From Show ELSE. this.state.patient is ", this.state.patient)
        return (
            <div className="pageContainer">
                <div className="navContainer">
                    <DropDown user={this.state.user}/>
                </div>
                <div className="showContainer">
                        <div className="leftContainer">
                            <Name user={this.state.user} patient={this.state.patient}/>
                        </div>
                        <div className="middleContainer">
                            <img className="childImage" src={boy} alt="boy"></img>
                        </div>
                        <div className="rightContainer">
                            <Conditions conditions={this.state.patient}/>
                            <Vaccinations vaccinations={this.state.patient}/>
                        </div>
                </div>
                {/* <p>Growth   Privacy Policy  Terms of Use</p> */}
            </div>
        )
        }
    }
}

export default Show