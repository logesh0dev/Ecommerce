import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product: []
}

export const slice = createSlice({
    name: "store",
    initialState,
    reducers: {
        setProduct(state, action) {
            state.product = [...state.product, action.payload]
        },

        removeProduct(state, action) {
            const index = state.product.findIndex(product => product.id === action.payload.id);

            if (index !== -1) {
                state.product.splice(index, 1);
            }
        },
    }

})

export const { setProduct, removeProduct } = slice.actions; 

export default slice.reducer