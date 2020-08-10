import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productApi from "../api/productApi";

export const apiProductList = createAsyncThunk(
  "products/fetchProductsStatus",
  async () => {
    try {
      const responseProductList = await productApi.getAll();
      return responseProductList;
    } catch (error) {
      console.log("Failed to fetch product list: ", error);
    }
  }
);
export const apiProductByCategory = createAsyncThunk(
  "products/fetchProductByCategoryStatus",
  async (id) => {
    try {
      const responseProductByCategory = await  productApi.getByCategory(id);
      return responseProductByCategory;
    } catch (error) {
      console.log("Failed to fetch product list: ", error);
    }
  }
);
export const apiAddProduct = createAsyncThunk(
  "products/fetchAddProductsStatus",
  async (requestProduct) => {
    try {
      const responseAddProduct = await productApi.post(requestProduct);
      return responseAddProduct;
    } catch (error) {
      console.log("Failed to fetch product list: ", error);
    }
  }
);
export const apiUpdateProduct = createAsyncThunk(
  "products/fetchUpdateProductsStatus",
  async (requestProduct) => {
    try {
      const responseUpdateProduct = await productApi.put(
        requestProduct.id,
        requestProduct
      );
      return responseUpdateProduct;
    } catch (error) {
      console.log("Failed to fetch product list: ", error);
    }
  }
);
export const apiDeleteProduct = createAsyncThunk(
  "products/fetchDeleteProductsStatus",
  async (id) => {
    try {
      const responseProductFindId = await productApi.get(id);
      await productApi.delete(id);
      return responseProductFindId;
    } catch (error) {
      console.log("Failed to fetch product list: ", error);
    }
  }
);
const product = createSlice({
  name: "products",
  initialState: [],
  reducers: {},
  extraReducers: {
    [apiProductList.fulfilled]: (state, action) => {
      return action.payload;
    },
    [apiProductByCategory.fulfilled]: (state, action) => {
      return action.payload;
    },
    [apiAddProduct.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
    [apiDeleteProduct.fulfilled]: (state, action) => {
      const removeProductId = action.payload.id;
      return state.filter((product) => product.id !== removeProductId);
    },
    [apiUpdateProduct.fulfilled]: (state, action) => {
      const newProduct = action.payload;
      const ProductIndex = state.findIndex(
        (product) => product.id === newProduct.id
      );

      if (ProductIndex >= 0) {
        state[ProductIndex] = newProduct;
      }
    },
  },
});

const { reducer } = product;
export const selectProduct = (state) => state.products;
export default reducer;
