import { configureStore } from '@reduxjs/toolkit'
import API from '../services/api'
import cartReducer from './reducers/cart'
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [API.reducerPath]: API.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(API.middleware)
})

export default store

export type RootReducer = ReturnType<typeof store.getState>
