import React, {useState} from "react";
import { createStore, configureStore, combineReducers } from '@reduxjs/toolkit'

function App() {

  function onlySum(totalSum = 0, action){
    switch(action.type){
      case 'INCREMENT' :
        return totalSum + 1;
      case 'SUM' :
        return totalSum + action.payload
      default :
        return totalSum
    }
  }

  function onlySub(totalSub = 0, action){
    switch(action.type){
      case 'DECREMENT' :
        return totalSub - 1;
      case 'SUB' :
        return totalSub - action.payload
      default :
        return totalSub
    }
  }

  // const reducer = combineReducers({onlySum, onlySub})

  const store = configureStore({reducer: onlySum, onlySub})

  function increment(){
    console.log('Era assim -> ', store.getState())
    store.dispatch({type: 'INCREMENT'})
    console.log('Ficou assim -> ', store.getState())
  }

  function decrement(){
    console.log('Era assim -> ', store.getState())
    store.dispatch({type: 'DECREMENT'})
    console.log('Ficou assim -> ', store.getState())
  }

  function sum(){
    console.log('Era assim -> ', store.getState())
    store.dispatch({type: 'SUM', payload: 2})
    console.log('Ficou assim -> ', store.getState())
  }

  function sub(){
    console.log('Era assim -> ', store.getState())
    store.dispatch({type: 'SUB', payload: 2})
    console.log('Ficou assim -> ', store.getState())
  }


  return (
    <div className="App">   
      <div>
        <h1>Only increments</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={sum}>Sum 2</button>
      </div>

      <div>
        <h1>Only decrements</h1>
        <button onClick={decrement}>Decrement</button>
        <button onClick={sub}>Sub 2</button>
      </div>
    </div>
  );
}

export default App;
