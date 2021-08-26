import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

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

function delay(){
    return new Promise((resolve) =>
        setTimeout(() => resolve(), 3000)
     );
}

export const counterSelect = state => state.counter

//to be used in our application and passed as argument to dispatch
export const {increments} = slice.actions

export default slice.reducer