import { createSlice } from "@reduxjs/toolkit";

const storedInLocal = localStorage.getItem("carts")
const initialState = {
    items : storedInLocal ? JSON.parse(storedInLocal) : []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart : (state, action) => {
            const newItem = action.payload;
            const existItem = state.items.find((items)=> items.id == newItem.id);
            if(existItem){
                existItem.quantity += newItem.quantity;
            }else{
                state.items.push(newItem);
            }
            localStorage.setItem("carts", JSON.stringify(state.items));
        },
        
        deleteCart : (state, action) => {
            const deleteItem = action.payload;
            state.items = state.items.filter(items=>items.id !== deleteItem.id);
            localStorage.setItem("carts", JSON.stringify(state.items));
        },
        
        addQuantity : (state, action) => {
            const addProduct = action.payload;
            const product = state.items.find(items=>items.id == addProduct.id);
            product.quantity = addProduct.quantity + 1;
        },

        subQuantity : (state, action) => {
            const subProduct = action.payload;
            const product = state.items.find(items=>items.id == subProduct.id);
            if(product.quantity <= 1){
                product.quantity = 1;
            }else{
                product.quantity = subProduct.quantity - 1;
            }
        }

    }

})

export const {addToCart, deleteCart, addQuantity, subQuantity} = cartSlice.actions
export default cartSlice.reducer