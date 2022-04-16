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
import CreatePortal from './components/CreatePortal';
import ComA from './components/Redux/ComA';
import ComB from './components/Redux/ComB';
import VirtualList from './components/VirtruaList';
import Hoc from './components/HOC/HocA';
import RouterL from './components/Router';

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
        <RouterL/>
    </div>
}

// class App extends React.Component {
//     state = {
//         count: 0,
//         value: {a: 1, b:2},
//     }
//     componentDidUpdate(){
//         console.log('app rendered')
//     }
//     handleClick = () => {
//         this.setState({
//             count: 1
//         })
//         console.log('click')
//     }
//     handleClick2 = () => {
//         console.log(this)
//     }
//     render() {
//         return (
//             <div className="my-app" onClick={this.handleClick}>
//                 {/* <ReactLifeCycle key={1}/> */}
//                 <NumContext.Provider value={this.state.value}>
//                     <FatherComponent />
//                 </NumContext.Provider>
//             </div>

//             // <div className="box" onClick={this.handleClick}>
//             //     <CreatePortal>
//             //         <div className="dialog" onClick={this.handleClick2}></div>
//             //     </CreatePortal>
//             // </div>
//         );
//     }
// }

export default App;
