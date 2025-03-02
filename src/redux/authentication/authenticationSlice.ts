import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    email: "",
    password: "",
    photo: ""
}

const authenticationSlice = createSlice({
    name: "authentication",
    initialState,
    reducers: {
        nameEnter(state, action){
            const name = action.payload;
            return {...state, name};
        },
        emailEnter(state, action){
            const email = action.payload;
            return {...state, email};
        },
        passwordEnter(state, action){
            const password = action.payload;
            return {...state, password};
        },
        photoEnter(state, action){
            const photo = action.payload;
            return {...state, photo};
        }
    }
})

export const {nameEnter, emailEnter, passwordEnter, photoEnter} = authenticationSlice.actions;
export default authenticationSlice.reducer;
