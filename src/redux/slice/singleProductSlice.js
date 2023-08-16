import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product: {},
}
const singleProductSlice = createSlice({
    name: 'singleProduct',
    initialState,
    reducers: {
        fetchSingleProduct: (state, { payload }) => {
            state.product = payload;
        }
    }
})

export const { fetchSingleProduct } = singleProductSlice.actions

export const getSingleProduct = (state) => state.singleProduct.product

export default singleProductSlice.reducer;