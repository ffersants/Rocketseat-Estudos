import React from 'react';
import {addToCart, removeFromCart} from './sliceCart'
import {useSelector, useDispatch} from 'react-redux'

import {increments, counterSelect} from './slicerCounter'

function App() {
  //to prevent importing store only to call its dispatch method
  const dispatch = useDispatch()
  
  //takes only the states of the slice
  const mySelector = useSelector(counterSelect )
  console.log('mySelector', mySelector)
  
  //takes all states inside our store
  const globalSelect = useSelector(state => state)
  console.log(globalSelect)
 

  function clicado(){
    //calls the action with type: counter/increments
    dispatch(increments())
  }

  
  function addItem(){
    const input = document.getElementById('item')
    if(input.value.trim() === '') return
    dispatch(addToCart(input.value))
    
    input.value = ''
    input.focus()
  }
  function removeItem(){
    const input = document.getElementById('item')
    if(input.value.trim() === '') return
    dispatch(removeFromCart(input.value))

    input.value = ''
    input.focus()
  }
  return (
    <div className="App">
      <button onClick={clicado}>Increment</button>

      <input id="item" type="text" />
      <button onClick={addItem}>Add to cart</button>
      <button onClick={removeItem}>Remove from cart</button>
    </div>
  );
}

export default App;
