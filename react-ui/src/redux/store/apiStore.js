import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { foodApi } from "../services/api";

export const store = configureStore({
    reducer: {
        [foodApi.reducerPath]: foodApi.reducer
    },
    // https://redux-toolkit.js.org/rtk-query/overview
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(foodApi.middleware)
})

setupListeners(store.dispatch);