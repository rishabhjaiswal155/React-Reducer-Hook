import './App.css';
// import CounterOne from './components/CounterOne';
// import CounterThree from './components/CounterThree';
// import CounterTwo from './components/CounterTwo';
import React, { Component, useReducer } from 'react';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';
import DataFetchingOne from './components/DataFetchingOne';
export const CountContext = React.createContext()
const initialState = 0
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
    default:
      return state
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
      <div className="App">
        {/* {/* <CounterOne/><br/>
      <CounterTwo/><br/>
      <CounterThree/> */}
        count-{count}
        <ComponentA/>
        <ComponentB />
        <ComponentC /><br/>
        <DataFetchingOne/>
      </div>
    </CountContext.Provider>
  );
}

export default App;
