import React from 'react';
import {increments} from './slicersFont'


import {store} from './app/store'

function App() {
  function clicado(){
    //calls the action with type: counter/increments
    store.dispatch(increments())
  }
  return (
    <div className="App">
      <button onClick={clicado}>Increment</button>
    </div>
  );
}

export default App;
