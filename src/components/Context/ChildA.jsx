import React, { useContext, useState } from 'react';
import { NumContext } from '../../context';

const ChildComponent = () => {
    const context = useContext(NumContext);
    console.log('A')
    return (
        <div>
            <div>{context.a}</div>
        </div>
    );
}

// ChildComponent.contextType = NumContext;

export default ChildComponent;
