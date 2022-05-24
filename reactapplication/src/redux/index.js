import { configureStore } from "@reduxjs/toolkit";
import { categoriesSlice } from "./categories";
import { productSlice } from "./products";

export const store = configureStore({
    reducer:{
        product:productSlice.reducer,
        category:categoriesSlice.reducer
    }
})