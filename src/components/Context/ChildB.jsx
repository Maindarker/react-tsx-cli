import React, { useContext, useState } from 'react';
import { NumContext } from '../../context';

const ChildComponent = () => {
    const context = useContext(NumContext);
    console.log('B')
    return (
        <div>
            {context.b}
        </div>
    );
}

// ChildComponent.contextType = NumContext;

export default ChildComponent;
