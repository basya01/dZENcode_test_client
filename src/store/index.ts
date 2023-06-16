import { configureStore } from '@reduxjs/toolkit';
import orders from './slices/orders';

const store = configureStore({
  reducer: { orders },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
