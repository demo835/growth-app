import React, { Component } from 'react'

export default class Name extends Component {
    constructor(props) {
        super(props)
    }

    // componentDidMount() {
    //     var elems = document.querySelectorAll('.modal');
    //     var instances = M.Modal.init(elems);
    // }
    render() {

        return (
            <div id="modal1" class="modal">
                <div class="modal-content">
                <h4>Modal Header</h4>
                <p>A bunch of text</p>
                </div>
                <div class="modal-footer">
                <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
                </div>
            </div>
        )
    }
}