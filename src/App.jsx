import React, { useRef, useState, useEffect, useMemo, useCallback } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import RequestIdleCallback from './components/RequestIdleCallback';
import FatherComponent from './components/Context/FatherComponent';
import { NumContext, NameContext } from './context';
import BuggyCounter from './components/ComponentDidCatch/BuggyCounter';
import ErrorBoundary from './components/ComponentDidCatch/ErrorBoundary';
import ReactRef from './components/ReactRef';
import ReactLifeCycle from './components/ReactLifeCycle';
import CreatePortalDialog from './components/CreatePortal';
import ComA from './components/Redux/ComA';
import ComB from './components/Redux/ComB';
import VirtualList from './components/VirtruaList';
import Hoc from './components/HOC/HocA';
import ReactRouter from './components/Router';

import './app.scss';

const defaultState = {
    name: 'default',
    age: 22
};
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        age: state.age + action.payload,
      };
    default: 
      return state;
  }
};

const store = createStore(reducer);
const state = store.getState();


const App = () =>  {
    const [stateA, setA] = useState({a: 1, b:2});
    const [number, setNum] = useState(0)
    // return (
    //     <Provider store={store}>
    //       <Hooks/>
    //       <Hooks1/>
    //     </Provider>
    // );
  console.log(1)
    return <div className="my-app" onClick={() => setNum(number+1)}>
        {/* <Hoc number={number}/> */}
                
        {/* <RequestIdleCallback /> */}
        {/* <NumContext.Provider value={stateA}>
            <FatherComponent />
        </NumContext.Provider> */}
        {/* <ErrorBoundary>
            <BuggyCounter />
        </ErrorBoundary> */}
        {/* <ReactRef /> */}
        {/* <ReactLifeCycle />  */}
        {/* <VirtualList/> */}
        {/* <ReactRouter/> */}
        <CreatePortalDialog
          onClose
        >
          <div className="dialog-con"></div>
        </CreatePortalDialog>
        
    </div>
}

export default App;
