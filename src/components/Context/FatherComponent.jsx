import React, { forwardRef } from 'react';
import ChildComponent from './ChildComponent';

const FatherComponent = forwardRef((props, ref) => {
    return (
        <ChildComponent ref={ref}/>
    );
})

export default FatherComponent;
