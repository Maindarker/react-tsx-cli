import React, { useContext, forwardRef } from 'react';
import { NumContext } from '../../context';

const ChildComponent = forwardRef((props,ref) => {
    console.log(props,ref)
    const context = useContext(NumContext);
    return (
        <div ref={ref}>
            {context.num}
        </div>
    );
})

// ChildComponent.contextType = NumContext;

export default ChildComponent;
