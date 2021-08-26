import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: "counter",
    initialState: 0,
    reducers: {
        increments: (state) => {        
            return state += 1
        }
    },
    
})

export const {increments} = slice.actions

export default slice.reducer