import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../apiClient';
import { Product, Status } from '../../models';

interface Returned {
  products: Product[];
  totalProducts: number;
}

export const fetchProducts = createAsyncThunk(
  'product/fetchProducts',
  async (type?: number | undefined) => {
    const { data } = await api.get(`/products`, { params: { type } });
    return data as Returned;
  }
);

interface ProductsState {
  products: Product[];
  totalProducts: number;
  status: Status;
}

const initialState: ProductsState = {
  products: [],
  totalProducts: 0,
  status: Status.IDLE,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload.products;
        state.totalProducts = action.payload.totalProducts;
        state.status = Status.SUCCEEDED;
      })
      .addCase(fetchProducts.pending, (state) => {
        state.status = Status.PENDING;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = Status.FAILED;
      });
  },
});

export default productsSlice.reducer;
