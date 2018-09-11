import React, { Component } from 'react'
import M from "materialize-css/dist/js/materialize.min.js"

export default class Name extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        var elems = document.querySelectorAll('.modal');
        var instances = M.Modal.init(elems);
    }

    render() {
        let conditions = this.props.conditions.diagnosis.map(x => {
            return (<li>
              <div className="collapsible-header"><i className="material-icons">filter_drama</i>{x.condition}</div>
              <div className="collapsible-body"><span><a href="/conditions/update">Remove {x.condition}</a></span></div>
            </li>)
          })
          console.log(conditions)

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
            <h4>Modal Header</h4>
            <p>A bunch of text</p>
            </div>
            <div className="modal-footer">
            <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
            </div>
            </div>
            </div>

        )
    }
}