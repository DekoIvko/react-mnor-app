import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";
import {
  GetProductsService,
  GetProductsServiceSingle,
} from "../services/GetProductsService";

const initialState = {
  products: [],
  productsStatus: STATUS.IDLE,
  productSingle: [],
  productSingleStatus: STATUS.IDLE,
  errors: "",
};

const productsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAsyncProducts.fulfilled, (state: any, action: any) => {
        state.productsStatus = STATUS.SUCCEEDED;
        state.products = action.payload;
      })
      .addCase(fetchAsyncProducts.rejected, (state: any, action: any) => {
        state.productsStatus = STATUS.FAILED;
        state.error = action.error.message;
      })
      .addCase(fetchAsyncProducts.pending, (state: any, action: any) => {
        state.productsStatus = STATUS.LOADING;
      })
      .addCase(
        fetchAsyncProductsSingle.fulfilled,
        (state: any, action: any) => {
          state.productSingleStatus = STATUS.SUCCEEDED;
          state.productSingle = action.payload;
        }
      )
      .addCase(fetchAsyncProductsSingle.rejected, (state: any, action: any) => {
        state.productSingleStatus = STATUS.FAILED;
        state.error = action.error.message;
      })
      .addCase(fetchAsyncProductsSingle.pending, (state: any, action: any) => {
        state.productSingleStatus = STATUS.LOADING;
      });
  },
});

export const fetchAsyncProducts = createAsyncThunk(
  "products/fetch",
  async () => {
    const response = await GetProductsService();
    const data = response.data.products;
    return data;
  }
);

export const fetchAsyncProductsSingle = createAsyncThunk(
  "productSingle/fetch",
  async (product: string) => {
    const response = await GetProductsServiceSingle(product);
    const data = response.data.products;
    return data;
  }
);

export const getAllProducts = (state: any) => state.product.products;
export const getAllProductStatus = (state: any) => state.product.productsStatus;
export const getProductSingle = (state: any) => state.product.productSingle;
export const getProductSingleStatus = (state: any) =>
  state.product.productSingleStatus;
export default productsSlice.reducer;
