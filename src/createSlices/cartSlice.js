import { createSlice } from '@reduxjs/toolkit';

const dataCart = JSON.parse(localStorage.getItem('CART'));

const cart = createSlice({
  name: 'carts',
  initialState: dataCart ? dataCart : [],
  reducers: {
    addToCart: (state, action) => {
      const CartIndex = state.findIndex(
        (cart) => cart.product.id === action.payload.product.id
      );
      if (CartIndex >= 0) {
        state[CartIndex].quantity += action.payload.quantity;
      }else{
        state.push(action.payload);
      }
      localStorage.setItem("CART", JSON.stringify(state));
    },
    deleteCart: (state, action) => {
      const removeCartId = action.payload.product.id;
      const newCart = state.filter((cart) => cart.product.id !== removeCartId);
      localStorage.setItem("CART", JSON.stringify(newCart));
      return newCart;
    },
    updateCart: (state, action) => {
      const updateCartId = action.payload.cart.product.id;
      const CartIndex = state.findIndex(
        (cart) => cart.product.id === updateCartId
      );
      if (CartIndex >= 0) {
        state[CartIndex].quantity = action.payload.quantity;
      }
      localStorage.setItem("CART", JSON.stringify(state));
    },
    resetCart: (state, action) => {
      var newState = action.payload;
      localStorage.setItem("CART", JSON.stringify(newState));
      return newState;
    },
  }
});

const { reducer, actions } = cart;
export const { addToCart, deleteCart, updateCart, resetCart } = actions;
export default reducer;