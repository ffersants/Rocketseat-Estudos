import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: "counter",
    initialState: {
        counter: 0
    },
    reducers: {
        increments: state => {        
            state.counter += 1
        }
    },
    
})
//to be used in our application and passed as argument to dispatch
export const {increments} = slice.actions

export default slice.reducer