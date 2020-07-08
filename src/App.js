import React from 'react';
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


function App() {
  return (
    <div className="App">
      <CounterTwo></CounterTwo>
    </div>
  )
}

export default App;
