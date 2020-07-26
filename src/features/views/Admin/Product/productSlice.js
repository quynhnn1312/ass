import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import categoryApi from "../../../../api/categoryApi";
import productApi from "../../../../api/productApi";

export const apiProductList = createAsyncThunk(
  "products/fetchProductsStatus",
  async () => {
    try {
      const responseCategoryList = await categoryApi.getAll();
      let responseProductList = await Promise.all(
        responseCategoryList.map(async (cate) => {
          let filmResponse = await productApi.getAll(cate.id);
          return [...filmResponse];
        })
      );
      return [].concat(...responseProductList);
    } catch (error) {
      console.log("Failed to fetch product list: ", error);
    }
  }
);
export const apiAddProduct = createAsyncThunk(
  "products/fetchAddProductsStatus",
  async (requestProduct) => {
    try {
      const responseAddProduct = await productApi.post(
        requestProduct.categoryId,
        requestProduct
      );
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
        requestProduct.categoryId,
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
  async (data) => {
    try {
      const responseDeleteProduct = await productApi.delete(
        data.cateId,
        data.proId
      );
      console.log("remove", responseDeleteProduct);
      return responseDeleteProduct;
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
    [apiAddProduct.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
    [apiDeleteProduct.fulfilled]: (state, action) => {
      const removeProductId = action.payload.id;
      return state.filter((product) => product.id !== removeProductId);
    },
    [apiUpdateProduct.fulfilled]: (state, action) => {
      const newProduct = action.payload;
      console.log(newProduct);
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
