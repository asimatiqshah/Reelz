import { createSlice } from "@reduxjs/toolkit"

interface CounterStateProp {
    value:number
}

const initialState:CounterStateProp = {
    value:0
}

export const counterSlice  = createSlice({
    name:'counterOne',
    initialState,
    reducers:{
        increment:(state)=>{
            if(state.value < 10){
                state.value += 1
            }
        },
        decrement:(state)=>{
            if(state.value > 0){
                state.value -= 1
            }
        }
    }
});

export const {increment,decrement} = counterSlice.actions;
export default counterSlice.reducer