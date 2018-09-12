import React, { Component } from 'react'

export default class Name extends Component {

    render() {
        return (
            <div className="card card1">
                <div className="card-image waves-effect waves-block waves-light">
                    <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">{this.props.patient.name}<i className="material-icons right">more_vert</i></span>
                    <p>Age: {this.props.patient.age} years old</p>
                    <p>Weight: {this.props.patient.weight} lbs.</p>
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