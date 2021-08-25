import React, {useState} from 'react';
import { configureStore } from '@reduxjs/toolkit'

function App() {
  let myObject = {
    feelling: 'confused',
    expectation: 'be rich'
  }

  function feelingReducer(value = feelingCreator(), action){
    switch(action.type){
      case 'CONCAT' :
        return value.payload + action.payload
      case 'UPDATE' :
        return action.payload
      default :
        return value.payload
    }
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
    console.log('Antes era assim', store.getState())
    
    store.dispatch(feelingCreator(inputFeelling))
    store.dispatch(expectationCreator(inputExpectation))

    console.log('Agora é assim', store.getState())
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
