import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import transactionApi from "../api/transactionApi";
import orderApi from "../api/orderApi";

var date = new Date().toJSON().slice(0,10);
var time = new Date().toJSON().slice(11,19)
var dateTime = date+' '+time;

export const apiTransactionList = createAsyncThunk(
  "transactions/fetchTransactionStatus",
  async () => {
    try {
      const responseTransactionList = await transactionApi.getAll();
      return responseTransactionList;
    } catch (error) {
      console.log("Failed to fetch transaction list: ", error);
    }
  }
);

export const apiAddTransaction = createAsyncThunk(
  "transactions/fetchAddTransactionStatus",
  async (request) => {
    try {
      const dataCart = JSON.parse(localStorage.getItem('CART'));
      const responseAddTransaction = await transactionApi.post(request);
      await Promise.all(dataCart.map(async(cart)=>{
        const data = {
          "transactionId": responseAddTransaction.id,
          "productId": cart.product.id,
          "quantity": cart.quantity,
          "price": cart.product.price,
          "image": cart.product.avatar,
          "name": cart.product.name,
          "discount": cart.product.discount,
          "created_at": dateTime,
          "updated_at": dateTime
        }
        return await orderApi.post(data);
      }));
      return responseAddTransaction;
    } catch (error) {
      console.log("Failed to fetch transaction list: ", error);
    }
  }
)

export const apiUpdateTransaction = createAsyncThunk(
  "transactions/fetchUpdateTransactionStatus",
  async (requestTransaction) => {
    try {
      const responseUpdateTransaction = await transactionApi.put(
        requestTransaction.id,
        requestTransaction
      );
      return responseUpdateTransaction;
    } catch (error) {
      console.log("Failed to fetch transaction list: ", error);
    }
  }
);

export const apiDeleteTransaction = createAsyncThunk(
  "transactions/fetchDeleteTransactionStatus",
  async (id) => {
    try {
      const responseTransactionFindId = await transactionApi.get(id);
      await transactionApi.delete(id);
      return responseTransactionFindId;
    } catch (error) {
      console.log("Failed to fetch transaction list: ", error);
    }
  }
);

const transaction = createSlice({
  name: "transactions",
  initialState: [],
  reducers: {},
  extraReducers: {
    [apiTransactionList.fulfilled]: (state, action) => {
      return action.payload;
    },
    [apiAddTransaction.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
    [apiUpdateTransaction.fulfilled]: (state, action) => {
      const newTransaction = action.payload;
      const TransactionIndex = state.findIndex(
        (transaction) => transaction.id === newTransaction.id
      );

      if (TransactionIndex >= 0) {
        state[TransactionIndex] = newTransaction;
      }
    },
    [apiDeleteTransaction.fulfilled]: (state, action) => {
      const removeTransactionId = action.payload.id;
      return state.filter((transaction) => transaction.id !== removeTransactionId);
    },
  },
});

const { reducer } = transaction;
export const selectTransaction = (state) => state.transactions;
export default reducer;
