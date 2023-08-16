import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: true,
    products: [],
    error: ''
}
const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        fetchProducts: (state, { payload }) => {
            state.products = payload;
        }
    }
})

export const { fetchProducts } = productSlice.actions;

export const getAllProducts = (state) => state.products.products

export default productSlice.reducer;