import React, { userEffect, useRef, useEffect } from 'react';
import MiddleComponent from './MiddleComponent'

export default () => {
    const hookRef = useRef({});

    useEffect(() => {
        console.log(hookRef);
    },[])
    return <MiddleComponent ref={hookRef}/>
}