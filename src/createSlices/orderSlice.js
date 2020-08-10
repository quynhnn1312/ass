import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import orderApi from "../api/orderApi";

export const apiOrderList = createAsyncThunk(
  "orders/fetchOrderStatus",
  async () => {
    try {
      const responseOrderList = await orderApi.getAll();
      return responseOrderList;
    } catch (error) {
      console.log("Failed to fetch order list: ", error);
    }
  }
);

const order = createSlice({
  name: "orders",
  initialState: [],
  reducers: {},
  extraReducers: {
    [apiOrderList.fulfilled]: (state, action) => {
      return action.payload;
    }
  },
});

const { reducer } = order;
export const selectOrder = (state) => state.orders;
export default reducer;
