import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product: [],
    wishlist:[],
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

        setWishlist(state, action) {
            const itemIndex = state.wishlist.findIndex(item => item.id === action.payload.id);
            
            if (itemIndex !== -1) {
              state.wishlist = state.wishlist.filter((_, index) => index !== itemIndex);
            } else {
              state.wishlist = [...state.wishlist, action.payload];
            }},
          

        removeWishList(state, action) {
            const index = state.wishlist.findIndex(product => product.id === action.payload.id);

            if (index !== -1) {
                state.wishlist.splice(index, 1);
            }
        },
    }

})

export const { setProduct, removeProduct, setWishlist, removeWishList } = slice.actions; 

export default slice.reducer