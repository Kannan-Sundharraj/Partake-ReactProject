import { configureStore } from "@reduxjs/toolkit";
import addToCart from "./cartSlice/cartSlice";

const store = configureStore({
    reducer: {
        cart: addToCart
    }
})

export default store