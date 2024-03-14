import { createReducer } from "@reduxjs/toolkit";
import authActions from "../actions/auth.actions";
const {login, current} = authActions

const initialState = {
    user: {
        name: "",
        email: "",
        loggedin: null,
    },
    token: null,
    timestamps: null
}

const authReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(login,  (state, action) => {
            return {
                ...state,
                user: action.payload
            }
        }) 
        .addCase(current, (state, action) => {
            return {
                ...state,
                user: action.payload
            }
        })
})

export default authReducer;