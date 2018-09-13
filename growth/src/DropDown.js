import React, { Component } from 'react'
import M from "materialize-css/dist/js/materialize.min.js"
import axios from 'axios'
import { 
    Link }
    from "react-router-dom"
import "./DropDown.css"

class DropDown extends Component {

    // componentDidMount() {
    //     var elems = document.querySelectorAll('.dropdown-trigger');
    //     console.log("elems is ", elems)
    //     var instances = M.Dropdown.init(elems)
    //     // M.Dropdown.init(elems)
    // }

    onSubmit = e => {
        console.log("submit clicked");
        let data = JSON.stringify({
        //   _id: this.props.match.params.id
        _id: this.props.user._id
        });
        console.log("data is ", data)
        axios.delete(`https://growth-mb.herokuapp.com/user/delete/${this.props.user._id}`, data, {
          headers: {
            "Content-Type": "application/json"
          }
        })
      }
    
    render() {
        if (!this.props.user) {
            return null
        }
        else {

        var elems = document.querySelectorAll('.dropdown-trigger');
        console.log("elems is ", elems)
        // var instances = M.Dropdown.init(elems)
        M.Dropdown.init(elems)

        return (
            <div>
                <button className='dropdown-trigger btn teal' data-target='dropdown1'>
                {/* <a className='dropdown-trigger btn' href='#' data-target='dropdown1'> */}
                {this.props.user.firstName}
                {/* </a> */}
                </button>

                <ul id='dropdown1' className='dropdown-content'>
                    <li><p className="dropdown-p">Profile</p></li>
                    <Link to="/"><li><p className="dropdown-p" onClick={this.onSubmit}>Delete Account</p></li></Link>
                    {/* <li><a href={`/user/delete/${this.props.user[0]._id}`} onClick={this.onSubmit}>Delete Account</a></li> */}
                    <li className="divider" tabIndex="-1"></li>
                    <Link to="/"><li><p className="dropdown-p">Log Out</p></li></Link>
                    {/* <li><a href="#!"><i className="material-icons">view_module</i>four</a></li>
                    <li><a href="#!"><i className="material-icons">cloud</i>five</a></li> */}
                </ul>
            </div>
        )
    }
    }
}

export default DropDown

// `http://localhost:3001/user/delete/${this.props.user[0]._id}`