import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface intialStateProp {
    value:boolean
}
const initialState:intialStateProp = {
    value:false
}

const lightModeSlice = createSlice({
    name:'theme',
    initialState,
    reducers:{
        switchColor:(state,action:PayloadAction<boolean>)=>{
            state.value = action.payload
        }
    }
});

export const { switchColor } = lightModeSlice.actions;
export default lightModeSlice.reducer