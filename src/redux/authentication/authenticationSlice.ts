import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    password: "",
}

const authenticationSlice = createSlice({
    name: "authentication",
    initialState,
    reducers: {
        nameEnter(state, action){
            const name = action.payload;
            return {...state, name};
        },
        passwordEnter(state, action){
            const password = action.payload;
            return {...state, password};
        }
    }
})

export const {nameEnter, passwordEnter} = authenticationSlice.actions;
export default authenticationSlice.reducer;
