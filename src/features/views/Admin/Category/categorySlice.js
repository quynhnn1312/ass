import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import categoryApi from "../../../../api/categoryApi";

export const apiCategoryList = createAsyncThunk(
  "categories/fetchCategoryStatus",
  async () => {
    try {
      const responseCategoryList = await categoryApi.getAll();
      return responseCategoryList;
    } catch (error) {
      console.log("Failed to fetch category list: ", error);
    }
  }
);
export const apiAddCategory = createAsyncThunk(
  "categories/fetchAddCategoryStatus",
  async (requestCategory) => {
    try {
      const responseAddCategory = await categoryApi.post(requestCategory);
      return responseAddCategory;
    } catch (error) {
      console.log("Failed to fetch category list: ", error);
    }
  }
);
export const apiUpdateCategory = createAsyncThunk(
  "categories/fetchUpdateCategoryStatus",
  async (requestCategory) => {
    try {
      const responseUpdateCategory = await categoryApi.put(
        requestCategory.id,
        requestCategory
      );
      return responseUpdateCategory;
    } catch (error) {
      console.log("Failed to fetch category list: ", error);
    }
  }
);
export const apiDeleteCategory = createAsyncThunk(
  "categories/fetchDeleteCategoryStatus",
  async (id) => {
    try {
      const responseDeleteCategory = await categoryApi.delete(id);
      return responseDeleteCategory;
    } catch (error) {
      console.log("Failed to fetch category list: ", error);
    }
  }
);
const category = createSlice({
  name: "categories",
  initialState: [],
  reducers: {},
  extraReducers: {
    [apiCategoryList.fulfilled]: (state, action) => {
      return action.payload;
    },
    [apiAddCategory.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
    [apiDeleteCategory.fulfilled]: (state, action) => {
      const removeCategoryId = action.payload.id;
      return state.filter((category) => category.id !== removeCategoryId);
    },
    [apiUpdateCategory.fulfilled]: (state, action) => {
      const newCategory = action.payload;
      const CategoryIndex = state.findIndex(
        (category) => category.id === newCategory.id
      );

      if (CategoryIndex >= 0) {
        state[CategoryIndex] = newCategory;
      }
    },
  },
});

const { reducer } = category;
export const selectCategory = (state) => state.categories;
export default reducer;
