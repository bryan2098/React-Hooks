import React, {useReducer} from 'react';
import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';
import HookCounterOne from './components/HookCounterOne';
import HookMouse from './components/HookMouse';
import HookMouseContainer from './components/HookMouseContainer';
import IntervalHookCounter from './components/IntervalHookCounter';
import DataFeching from './components/DataFeching';
import CounterOne from './reduce/CounterOne';
import CounterTwo from './reduce/CounterTwo';

import ComponentA from './context-components/ComponentA';
import ComponentB from './context-components/ComponentB';
import ComponentC from './context-components/ComponentC';


// import ComponentC from './context-components/ComponentC';

// function App() {
//   return (
//     <div className="App">
//       {/* Components ClassCounter: 
//       <ClassCounter/> */}
//       {/* <HookCounter/> */}
//       {/* <HookCounterThree/> */}

//       {/* <HookCounterFour/> */}

//       {/* Components HookCounter
//       <HookCounterOne/> */}

//       {/* <HookMouse/> */}


//       {/* <HookMouseContainer/> */}

//       {/* <IntervalHookCounter/> */}

//       {/* <DataFeching/> */}



//     </div>
//   );
// }


export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

// function App() {

//   return (
//     <div className="App">
//       <UserContext.Provider value={'Vishwas'}>
//         <ChannelContext.Provider value={'Codevolution'}>
//           <ComponentC/>
//         </ChannelContext.Provider>
//       </UserContext.Provider>
//     </div>
//   );
// }


// function App() {
//   return (
//     <div className="App">
//       <CounterTwo></CounterTwo>
//     </div>
//   )
// }


export const CountContext = React.createContext();

const initialState = 0;

const reducer = (state, action) => {
    
    switch(action) {
        case 'increment':
            return state + 1;

        case 'decrement':
            return state - 1;

        case 'reset':
            return initialState;

        default:
            return state;
    }
}



function App() {
  const [count, dispatch] =  useReducer(reducer, initialState)

  return (
    <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
        <div className="App">
          <h1>{count}</h1>
          <ComponentA/>
          <ComponentB/>
        </div>
    </CountContext.Provider>
      )
  }

export default App;
