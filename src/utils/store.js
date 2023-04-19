import { configureStore } from "@reduxjs/toolkit";
import fieldSlice from "./fieldSlice";

const store = configureStore({
    reducer:{
        field: fieldSlice,
    },
});

export default store;