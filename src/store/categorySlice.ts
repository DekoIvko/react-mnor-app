import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";
import { GetCategoriesService } from "../services/GetCategoriesService";

const initialState = {
  categories: [],
  categoriesStatus: STATUS.IDLE,
  categoryProducts: [],
  categoryProductStatus: STATUS.IDLE,
  errors: "",
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: async (builder) => {
    builder
      .addCase(fetchAsyncCategories.rejected, (state: any, action) => {
        state.categoriesStatus = STATUS.FAILED;
        state.error = action.error.message;
      })
      .addCase(fetchAsyncCategories.pending, (state: any, action) => {
        state.categoriesStatus = STATUS.LOADING;
      })
      .addCase(fetchAsyncCategories.fulfilled, (state: any, action) => {
        state.categoriesStatus = STATUS.SUCCEEDED;
        state.categories = action.payload;
      });
  },
});

export const fetchAsyncCategories = createAsyncThunk(
  "categories/fetch",
  async () => {
    const response = await GetCategoriesService();
    const data = response.data;
    return data;
  }
);
export const getAllCategories = (state: any) => state.category.categories;
export default categorySlice.reducer;
