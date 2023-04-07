import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const itemIndex = state.cartItems.findIndex((item) => item._id === action.payload._id);
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1;
                toast.info(`Increased ${action.payload.name} cart quantity`, {
                    position: "bottom-left", autoClose: 500,
                });
            }
            else {
                const newProduct = { ...action.payload, cartQuantity: 1 }
                state.cartItems.push(newProduct);
                toast.success(`${action.payload.name} added to cart`, {
                    position: "bottom-left", autoClose: 500,
                });
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },

        removeFromCart(state, action) {
            const nextItemCart = state.cartItems.filter(cartItem => cartItem._id !== action.payload._id)
            state.cartItems = nextItemCart;
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            toast.success(`${action.payload.name} Remove from cart`, {
                position: "bottom-left", autoClose: 500,
            });

        },

        decreaseCartItem(state, action) {
            const itemIndex = state.cartItems.findIndex(item => item._id === action.payload._id)
            if (state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1;
                toast.success(`${action.payload.name} decrease from cart`, {
                    position: "bottom-left", autoClose: 500,
                });
            }
            else if (state.cartItems[itemIndex].cartQuantity === 1) {
                const nextItemCart = state.cartItems.filter(cartItem => cartItem._id !== action.payload._id)
                state.cartItems = nextItemCart;
                toast.success(`${action.payload.name} Remove from cart`, {
                    position: "bottom-left", autoClose: 500,
                });
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },


        clearCart(state, action) {
            state.cartItems = []
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        }
    }
})

export const { addToCart, removeFromCart, decreaseCartItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;