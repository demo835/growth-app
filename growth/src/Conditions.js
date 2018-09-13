import React, { Component } from 'react'
import M from "materialize-css/dist/js/materialize.min.js"
import axios from 'axios'

export default class Conditions extends Component {
    constructor(props) {
        super(props)

        this.state = {
            condition: {condition: ""}
          }
    }

    componentDidMount() {
        // var elems = document.querySelectorAll('.modal');
        // var instances = M.Modal.init(elems);
    }

    onChange = e => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
        console.log("e", e)
      }

      handleChange = (e) => {
        let obj = Object.assign({}, this.state.condition);    //creating copy of object
        obj.condition = e.target.value                     //updating value
        console.log("obj is", obj)
        this.setState({condition: obj});
        // this.setState({condition: e.target.value})
        console.log("this.state.condition is", this.state.condition)
      }

      onSubmit = e => {
        console.log("submit clicked")
        let data = JSON.stringify({
        //   _id: this.props.match.params.id,
          diagnosis: this.state.condition
        });
        console.log("data is", data)
        axios.put(
          `http://localhost:3001/conditions/update/${this.props.conditions._id}`,
          data,
          {
            headers: {
              "Content-Type": "application/json"
            }
          }
        );
      };

    render() {
      if(!this.props.conditions)
      {
        return null
      }
      else {
        let conditions = this.props.conditions.diagnosis.map((data, i) => {
            return (<li key={i}>
              <div className="collapsible-header"><i className="material-icons">filter_drama</i>{data.condition}</div>
              <div className="collapsible-body"><span><a href="/conditions/update">Remove {data.condition}</a></span></div>
            </li>)
          })
          console.log(conditions)
        
        var elems = document.querySelectorAll('.modal');
        var instances = M.Modal.init(elems);

        return (
            <div>
            <div className="card card2">
                <div className="card-image">
                  <a href="/conditions/new" className="btn-floating halfway-fab waves-effect waves-light red modal-trigger" href="#modal1"><i className="material-icons">add</i></a>
                </div>
                <div className="card-content">
                  <h4>Conditions</h4>
                  <ul className="collapsible">
                  {conditions}
                  </ul>
                </div>
              </div>

            <div id="modal1" className="modal">
                <div className="modal-content">
                    <h4>Create New Condition</h4>
                    {/* <p>A bunch of text</p> */}
                    <form onSubmit={this.onSubmit}>
                        <div className="input-field col s6">
                   
                            <input id="condition" type="text" className="validate" onChange={this.handleChange}></input>
                            <label htmlFor="condition">Name</label>
                    
                        </div>
                   
                        <div className="modal-footer">
                            <a href="#!" className="modal-close waves-effect waves-green btn-flat">Cancel</a>
                            <button type="submit"><a className="modal-close waves-effect waves-green btn-flat">Create</a></button>
                         </div>
                    </form>
                </div>
            </div>
        </div>
        )
    }
  }
}