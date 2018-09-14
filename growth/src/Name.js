import React, { Component } from 'react'
import "./Name.css"

class Name extends Component {

    render() {
        if (!this.props.patient || !this.props.user) {
            return null
        }
        else {
        return (
            <div className="card card1">
                <div className="card-image waves-effect waves-block waves-light">
                    <div className="card-content">
                    <h4 className="grey-text text-darken-4">{this.props.user.children}</h4>
                    <p><b>Age:</b> {this.props.patient.age} years old</p>
                    <p><b>Weight:</b> {this.props.patient.weight} lbs.</p>
                    </div>
                    <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                    <p>Here is some more information about this product that is only revealed once clicked on.</p>
                    </div>
                </div>
            </div>
        )
    }
    }
}

export default Name