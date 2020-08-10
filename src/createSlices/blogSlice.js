import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import blogApi from "../api/blogApi";

export const apiBlogList = createAsyncThunk(
  "blogs/fetchBlogStatus",
  async () => {
    try {
      const responseBlogList = await blogApi.getAll();
      return responseBlogList;
    } catch (error) {
      console.log("Failed to fetch blog list: ", error);
    }
  }
);
export const apiBlogFindId = createAsyncThunk(
  "blogs/fetchBlogFindIdStatus",
  async (id) => {
    try {
      const responseBlogFindId = await blogApi.get(id);
      return responseBlogFindId;
    } catch (error) {
      console.log("Failed to fetch blog find id by list: ", error);
    }
  }
);
export const apiAddBlog = createAsyncThunk(
  "blogs/fetchAddBlogStatus",
  async (requestBlog) => {
    try {
      const responseAddBlog = await blogApi.post(requestBlog);
      return responseAddBlog;
    } catch (error) {
      console.log("Failed to fetch blog list: ", error);
    }
  }
);
export const apiUpdateBlog = createAsyncThunk(
  "blogs/fetchUpdateBlogStatus",
  async (requestBlog) => {
    try {
      const responseUpdateBlog = await blogApi.put(
        requestBlog.id,
        requestBlog
      );
      return responseUpdateBlog;
    } catch (error) {
      console.log("Failed to fetch blog list: ", error);
    }
  }
);
export const apiDeleteBlog = createAsyncThunk(
  "blogs/fetchDeleteBlogStatus",
  async (id) => {
    try {
      const responseBlogFindId = await blogApi.get(id);
      await blogApi.delete(id);
      return responseBlogFindId;
    } catch (error) {
      console.log("Failed to fetch blog list: ", error);
    }
  }
);
const blog = createSlice({
  name: "blogs",
  initialState: [],
  reducers: {},
  extraReducers: {
    [apiBlogList.fulfilled]: (state, action) => {
      return action.payload;
    },
    [apiBlogFindId.fulfilled]: (state, action) => {
      return action.payload;
    },
    [apiAddBlog.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
    [apiDeleteBlog.fulfilled]: (state, action) => {
      const removeBlogId = action.payload.id;
      return state.filter((blog) => blog.id !== removeBlogId);
    },
    [apiUpdateBlog.fulfilled]: (state, action) => {
      const newBlog = action.payload;
      const BlogIndex = state.findIndex(
        (blog) => blog.id === newBlog.id
      );

      if (BlogIndex >= 0) {
        state[BlogIndex] = newBlog;
      }
    },
  },
});

const { reducer } = blog;
export const selectBlog = (state) => state.blogs;
export default reducer;
