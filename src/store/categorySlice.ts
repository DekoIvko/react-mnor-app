import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";
import {
  GetCategoriesService,
  GetProductsOfCategoriesService,
} from "../services/GetCategoriesService";

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
      })
      .addCase(fetchAsyncProductsOfCategory.rejected, (state: any, action) => {
        state.categoryProductStatus = STATUS.FAILED;
        state.error = action.error.message;
      })
      .addCase(fetchAsyncProductsOfCategory.pending, (state: any, action) => {
        state.categoryProductStatus = STATUS.LOADING;
      })
      .addCase(fetchAsyncProductsOfCategory.fulfilled, (state: any, action) => {
        state.categoryProductStatus = STATUS.SUCCEEDED;
        state.categoryProducts = action.payload;
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
export const fetchAsyncProductsOfCategory = createAsyncThunk(
  "category-products/fetch",
  async (category: string) => {
    const response = await GetProductsOfCategoriesService(category);
    const data = response.data.products;
    return data;
  }
);
export const getAllProductsByCategory = (state: any) =>
  state.category.categoryProducts;
export const getAllCategories = (state: any) => state.category.categories;
export const getAllProductsByCategoryStatus = (state: any) =>
  state.category.categoryProductStatus;
export default categorySlice.reducer;
