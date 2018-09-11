import React, { Component } from 'react'

export default class Name extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let vaccinations = this.props.vaccinations.vaccinations.map(x => {
            return (<p>{x.vaccine}</p>)
          })

        return (
            <div className="card card3">
                <div className="card-image">
                  <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
                </div>
                <div className="card-content">
                  <h4>Vaccinations</h4>
                  {vaccinations}
                </div>
          </div>
        )
    }
}