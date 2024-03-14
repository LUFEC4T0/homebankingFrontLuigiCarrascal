import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reduces/auth.reducer";

const store = configureStore({
    reducer: {
        authReducer
    },
})

export default store;