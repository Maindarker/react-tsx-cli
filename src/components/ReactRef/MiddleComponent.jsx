import React, { forwardRef } from 'react';

// class MiddleComponent extends React.Component {
//     render() {
//         return (
//             <div ref={this.props.ref1}>
//                 111
//             </div>
//         );
//     }
// }

const MiddleComponent = (props) => {
    return (
        <div>
            111
        </div>
    );
}


// export default forwardRef((props, ref) => <MiddleComponent ref={ref}/>);
// export default forwardRef(MiddleComponent)
export default MiddleComponent
