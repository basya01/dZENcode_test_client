import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../apiClient';
import { Order, Status } from '../../models';

interface Returned {
  orders: Order[];
  totalOrders: number;
}

export const fetchOrders = createAsyncThunk('order/fetchOrders', async () => {
  const { data } = await api.get(`/orders`);
  return data as Returned;
});

interface OrdersState {
  orders: Order[];
  totalOrders: number;
  status: Status;
}

const initialState: OrdersState = {
  orders: [],
  totalOrders: 0,
  status: Status.IDLE,
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.orders = action.payload.orders;
        state.totalOrders = action.payload.totalOrders;
        state.status = Status.SUCCEEDED;
      })
      .addCase(fetchOrders.pending, (state) => {
        state.status = Status.PENDING;
      })
      .addCase(fetchOrders.rejected, (state) => {
        state.status = Status.FAILED;
      });
  },
});

export default ordersSlice.reducer;
