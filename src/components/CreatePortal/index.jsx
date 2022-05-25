import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const containerRef = React.createRef();
//ReactDOM.createPortal不支持ref操作
class CreatePortalDialog extends Component {
    handleClick = () => {
        // ReactDOM.unmountComponentAtNode(this.ref);
    }
    render() {
        return ReactDOM.createPortal(
            <div className="mask" onClick={this.handleClick} ref={containerRef}>
                {this.props.children}
            </div>,
            document.body
        )
    }
}

export default CreatePortalDialog;

