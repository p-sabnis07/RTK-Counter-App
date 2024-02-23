import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./slices/CounterSlice";

// This configureStroe() creates global store where our all centralize data is present
export const store = configureStore({
    reducer: {
        counter: CounterSlice
    },
})
