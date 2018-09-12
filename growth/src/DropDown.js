import React, { Component } from 'react'
import M from "materialize-css/dist/js/materialize.min.js"

class DropDown extends Component {

    componentDidMount() {
        var elems = document.querySelectorAll('.dropdown-trigger');
        console.log("elems is ", elems)
        var instances = M.Dropdown.init(elems);
    }

    render() {
        return (
            <div>
                <a className='dropdown-trigger btn' href='#' data-target='dropdown1'>{this.props.user[0].firstName}</a>

                <ul id='dropdown1' className='dropdown-content'>
                    <li><a href="#!">Profile</a></li>
                    <li><a href="#!">Delete Account</a></li>
                    <li className="divider" tabIndex="-1"></li>
                    <li><a href="#!">Log Out</a></li>
                    <li><a href="#!"><i className="material-icons">view_module</i>four</a></li>
                    <li><a href="#!"><i className="material-icons">cloud</i>five</a></li>
                </ul>
            </div>
        )
    }
}

export default DropDown