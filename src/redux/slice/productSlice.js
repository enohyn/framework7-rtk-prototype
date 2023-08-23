import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllProducts } from "../../services/services";

export const fetchAsyncProducts = createAsyncThunk('products/fetchAsyncProducts',
    async () => {
        const allProducts = await fetchAllProducts();
        return allProducts
    })

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
    },
    extraReducers: {
        [fetchAsyncProducts.pending]: () => (
            console.log()
        ),
        [fetchAsyncProducts.fulfilled]: (state, { payload }) => {
            console.log('fetched Successfully');
            return { ...state, products: payload }
        },
        [fetchAsyncProducts.rejected]: () => {
            console.log('Rejected');
        },
    }
})

export const { fetchProducts } = productSlice.actions;

export const getAllProducts = (state) => state.products.products

export default productSlice.reducer;