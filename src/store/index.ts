import { configureStore } from '@reduxjs/toolkit';
import orders from './slices/orders';
import products from './slices/products';

const store = configureStore({
  reducer: { orders, products },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
