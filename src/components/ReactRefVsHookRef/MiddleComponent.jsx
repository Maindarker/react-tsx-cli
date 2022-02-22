import React, { forwardRef } from 'react';

const MiddleComponent = forwardRef((props,ref) => {
    return (
        <div ref={ref}>
            111
        </div>
    );
})

export default MiddleComponent;
