import React, { useRef, useState, useEffect } from 'react';
// import RequestIdleCallback from './RequestIdleCallback';
import FatherComponent from './components/Context/FatherComponent';
import { NumContext, NameContext } from './context';
import BuggyCounter from './components/ComponentLifecycle/BuggyCounter';
import ErrorBoundary from './components/ComponentLifecycle/ErrorBoundary';
import ReactRefVsHookRef from './components/ReactRefVsHookRef';
import './app.scss';

const App = () =>  {
    const [value, setValue] = useState({num:1,name: "wk"});
    const handleClick = () => {
        const stateValue = value;
        stateValue.num++;
        setValue({...stateValue});
    }
    
    return (
        <div className="my-app" id="wk" onClick={handleClick} >
            {/* <RequestIdleCallback /> */}

            {/* <NumContext.Provider value={value}>
                <FatherComponent />
            </NumContext.Provider> */}

            {/* <ErrorBoundary>
                <BuggyCounter />
            </ErrorBoundary> */}

            <ReactRefVsHookRef />
        </div>
    );
}

export default App;
