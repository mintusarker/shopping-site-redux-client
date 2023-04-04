import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../features/auth/authSlice';
import CartSlice from '../features/products/CartSlice';
import ProductSlice from '../features/products/ProductSlice';



const store = configureStore({
  reducer: {
    auth: authSlice,
    products: ProductSlice,
    cart: CartSlice,
  },
});



export default store;