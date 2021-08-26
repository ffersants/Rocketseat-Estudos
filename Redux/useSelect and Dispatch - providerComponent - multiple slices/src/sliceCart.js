import {createSlice} from '@reduxjs/toolkit'

const sliceCart = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        total: 0
    },
    reducers: {
        addToCart(state, action){            
           state.items.push(action.payload);
        },
        removeFromCart(state, action){
           state.items = state.items.filter(item => item != action.payload)
        }
    }
})

export const {addToCart, removeFromCart} = sliceCart.actions

export default sliceCart.reducer;