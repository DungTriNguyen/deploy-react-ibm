import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  carItems: [],
};
const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});
addItemToCart(state, action){
    const existingItem = state.cartItems.find(item => item.id === action.payload.id);
    if( existingItem ){
        existingItem.quantity += 1;

    }else {
        state.cartItems.push({...action.payload, quantity: 1});
    }
}, 
removeItemFromCart(state, action){
    state.cartItems = state.cartItems.filter(item => item.id !== action.payload);

},
clearCart(state){
    state.cartItem = [];
},
increaseItemQuantity(state, action){
    const itemToIncrease = state.cartItems.find(item => item.id === action.payload);
    if(itemToIncrease ){
        itemToIncrease.quantity += 1;
    }
},
decreaseTtemsQuantity(state, action){
    const itemToDecrease = state.carItems.find(item => item.id  === action.payload);
    if(itemToDecrease && itemToDecrease.quantity > 1){
        itemToDecrease.quantity -= 1;
    }
},
export const{
    addItemToCart,
    removeItemFromCart,
    clearCart,
    increaseItemQuantity,
    decreaseTtemsQuantity,

} = CartSlice.actions;
export default CartSlice.reducer;