import React, { Fragment } from 'react';
import ChildA from './ChildA';
import ChildB from './ChildB';
import { NameContext } from '../../context';

const FatherComponent = () => {
    return (
        <Fragment>
            <ChildA/>
            <ChildB/>
        </Fragment>
    );
}

export default FatherComponent;
