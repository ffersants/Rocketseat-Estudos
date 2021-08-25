import React, {useState} from 'react';
import { configureStore } from '@reduxjs/toolkit'

function App() {
  let myObject = {
    feelling: 'confused',
    expectation: 'be rich'
  }

  function reducer(state = myObject, action){
    if(action.type === 'updateFeelling'){
      return{
        ...state,
        feelling: action.payload,
      }
    } else if(action.type === 'updateExpectation'){
      return{
        ...state,
        expectation: action.payload,
      }
    }

    return state
  }
  const store = configureStore({reducer})

  const [inputFeelling, setFeellingValue] = useState('') 
  const [inputExpectation, setExpectationValue] = useState('') 

  function updateInput(){
    store.dispatch(feelingCreator(inputFeelling))

  }

  function feelingCreator(value) {
    return {
      type: 'updateFeelling', 
      payload: value
    }
  }

  function expectationCreator(value){
    return {
      type: 'updateExpectation',
      payload: value
    }
  }

  return (
    <div className="App">
        <label htmlFor="input">Feeling</label>
        <input onInput={(e) => setFeellingValue(e.target.value)} value={inputFeelling} id="input" type="text"/>
        
        
        <label htmlFor="input">Expectation</label>       
        <input onInput={(e) => setExpectationValue(e.target.value)} value={inputExpectation} id="input" type="text"/>
      <button onClick={updateInput}>Show store</button>
    </div>
  );
}

export default App;
