import React, { Component } from 'react'
import M from "materialize-css/dist/js/materialize.min.js"
import axios from 'axios'
import { 
    Link }
    from "react-router-dom"

class DropDown extends Component {

    componentDidMount() {
        var elems = document.querySelectorAll('.dropdown-trigger');
        console.log("elems is ", elems)
        // var instances = M.Dropdown.init(elems)
        M.Dropdown.init(elems)
    }

    onSubmit = e => {
        console.log("submit clicked");
        let data = JSON.stringify({
        //   _id: this.props.match.params.id
        _id: this.props.user[0]._id
        });
        console.log("data is ", data)
        axios.delete(`http://localhost:3001/user/delete/${this.props.user[0]._id}`, data, {
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

        return (
            <div>
                <a className='dropdown-trigger btn' href='#' data-target='dropdown1'>
                {/* Logged In */}
                {this.props.user.firstName}
                </a>

                <ul id='dropdown1' className='dropdown-content'>
                    <li><a href="#!">Profile</a></li>
                    <Link to="/"><li><a href="#!" onClick={this.onSubmit}>Delete Account</a></li></Link>
                    {/* <li><a href={`/user/delete/${this.props.user[0]._id}`} onClick={this.onSubmit}>Delete Account</a></li> */}
                    <li className="divider" tabIndex="-1"></li>
                    <Link to="/"><li><a href="#!">Log Out</a></li></Link>
                    <li><a href="#!"><i className="material-icons">view_module</i>four</a></li>
                    <li><a href="#!"><i className="material-icons">cloud</i>five</a></li>
                </ul>
            </div>
        )
    }
    }
}

export default DropDown

// `http://localhost:3001/user/delete/${this.props.user[0]._id}`