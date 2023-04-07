import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './slices/filter';
import cartReducer from './slices/cart';


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    cart: cartReducer,
  },
})