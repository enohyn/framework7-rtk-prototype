import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slice/productSlice";
import singleProductSlice from "./slice/singleProductSlice";
const store = configureStore({
    reducer: {
        products: productSlice,
        singleProduct: singleProductSlice,
    },
})

export default store;