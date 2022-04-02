import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class CreatePortal extends Component {
    render() {
        this.el = document.querySelector('#app');
        return ReactDOM.createPortal(
            this.props.children,
            this.el
        )
    }
}

export default CreatePortal;

