import React, { Component } from 'react';
import axios from "axios";
import { 
  Route,
  Switch }
  from "react-router-dom"
import M from "materialize-css/dist/js/materialize.min.js"
import LogIn from "./LogIn"
import SignUp from "./SignUp"
import Show from "./Show"
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      patient: null,
      user: null
    }
  }

  componentDidMount() {
    console.log("componentWillMount")
    axios.get("https://growth-mb.herokuapp.com/patients").then(data => {
      // console.log("get event data from axios...");
      // console.log(data.data);
      this.setState({ patient: data.data[0] });
      // console.log("inside componentwillmount App");
      // console.log("this.state.patients", this.state.patients);
      // console.log("this.state.patients.diagnosis", this.state.patients.diagnosis)
      // console.log(this.state.patients.diagnosis[0].condition)

    
    })

    axios.get("https://growth-mb.herokuapp.com/user").then(data2 => {
      this.setState({ user: data2.data })
    })
    //   let elems = document.querySelectorAll('.fixed-action-btn');
    // let instances = M.FloatingActionButton.init(elems, options);
    
    // // load feature discovery
    // elems = document.querySelectorAll('.tap-target');
    // instances = M.TapTarget.init(elems, options);
    // console.log('instances', instances)

    var elem = document.querySelector('.collapsible')
    // console.log("collapsible", elem)
    M.Collapsible.init(elem)
    // var instance = M.Collapsible.init(elem)
    // .Collapsible.getInstance(elem);
  }

  // componentDidMount() {
  //   axios.get("http://localhost:3001/patients/5b97fecb281ffa2ead71e9b3").then(data => {
  //     console.log("get event data from axios...");
  //     console.log(data.data);
  //     this.setState({ patients: data.data });
  //     console.log("inside componentdidmount App, patients is");
  //     console.log("this.state.patients", this.state.patients);
  //     console.log("this.state.patients.diagnosis", this.state.patients.diagnosis)
  //     // console.log(this.state.patients.diagnosis[0].condition)
  //   })
  // }

  render() {

    return (
      <div className="App">
         <Switch>
            <Route exact path="/" component={LogIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route
              path="/show"
              render={props => {
                return <Show />;
              }}
            />
            <Route
              path="/show?"
              render={props => {
                return <Show />;
              }}
            />
            {/* <Route exact path="/show" component={Show} /> */}
            {/* <Route
              exact
              path="/show"
              render={props => {
                return (
                  <div>
                  <Name patient={this.state.patients}/>
                  <Conditions conditions={this.state.patients}/>
                  <Vaccinations vaccinations={this.state.patients}/>
                  <DropDown user={this.state.user}/>
                  </div>
                )
              }}
            /> */}

        </Switch>
        {/* <LogIn /> */}
        {/* <Name patient={this.state.patients}/> */}
          {/* <div className="card card1">
            <div className="card-image waves-effect waves-block waves-light">
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">{this.state.patients.name}<i className="material-icons right">more_vert</i></span>
              <p>Age: {this.state.patients.age}</p>
              <p>Weight: {this.state.patients.weight}</p>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
              <p>Here is some more information about this product that is only revealed once clicked on.</p>
            </div>
          </div>
        </div> */}
         
        {/* <Conditions conditions={this.state.patients}/> */}
              {/* <div className="card card2">
                <div className="card-image">
                  <a href="/conditions/new" className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
                </div>
                <div className="card-content">
                  <h4>Conditions</h4>
                  <ul className="collapsible">
                  {conditions}
                  </ul>
                </div>
              </div> */}
        
        {/* <Vaccinations vaccinations={this.state.patients}/> */}
          {/* <div className="card card3">
                <div className="card-image">
                  <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
                </div>
                <div className="card-content">
                  <h4>Vaccinations</h4>
                  {vaccinations}
                </div>
          </div> */}
    </div>
    )
}
}

export default App
