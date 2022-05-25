import React, { forwardRef } from 'react';

class MiddleComponent extends React.Component {
    render() {
        console.log(this.props.ref)
        return (
            <div ref={this.props.ref}>
                111
            </div>
        );
    }
}

// const MiddleComponent = (props) => {
//     return (
//         <div>
//             111
//         </div>
//     );
// }


export default forwardRef((props, ref) => <MiddleComponent ref={ref}/>);
// export default forwardRef(MiddleComponent)
// export default MiddleComponent
