import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/views/Admin/Product/productSlice";
import categoryReducer from "../features/views/Admin/Category/categorySlice";

const rootReducer = {
  products: productReducer,
  categories: categoryReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
