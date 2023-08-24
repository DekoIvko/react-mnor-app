import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";
import { GetProductsBySearchService } from "../services/GetProductsService";

const initialState = {
  searchProducts: [],
  searchProductsStatus: STATUS.IDLE,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    clearSearch: (state, action) => {
      state.searchProducts = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncSearchProduct.pending, (state: any, action) => {
        state.searchProductsStatus = STATUS.LOADING;
      })

      .addCase(fetchAsyncSearchProduct.fulfilled, (state: any, action) => {
        state.searchProducts = action.payload;
        state.searchProductsStatus = STATUS.SUCCEEDED;
      })

      .addCase(fetchAsyncSearchProduct.rejected, (state: any, action) => {
        state.searchProductsStatus = STATUS.FAILED;
      });
  },
});

export const fetchAsyncSearchProduct = createAsyncThunk(
  "product-search/fetch",
  async (searchTerm: any) => {
    const response = await GetProductsBySearchService(searchTerm);
    const data = response.data.products;
    return data;
  }
);

export const { clearSearch } = searchSlice.actions;
export const getSearchProducts = (state: any) => state.search.searchProducts;
export const getSearchProductsStatus = (state: any) =>
  state.search.searchProductsStatus;
export default searchSlice.reducer;
