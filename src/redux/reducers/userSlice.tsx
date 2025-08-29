import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface UserStateProp {
    user:null | Record<string,any>
}

const initialState:UserStateProp = {
    user:{}
}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
       setUser:(state,action:PayloadAction<object>)=>{
            state.user = action.payload
       }
    }
});


// Action creators are generated for each case reducer function
export const { setUser} = userSlice.actions;

// structure state.user.user = state. userSlice name . property inside initialState
export const selectUser = (state:RootState)=>state.user.user;


// NOTE : selectUser is an helper functions to get data from the Redux store.
// Instead of writing this everywhere:
// const user = useSelector((state: RootState) => state.user.user);

//You can just use:
//const user = useSelector(selectUser);

export default userSlice.reducer