import { configureStore } from '@reduxjs/toolkit';
import slice from '../slicerCounter';
import cart from  '../sliceCart';

export const store = configureStore({
  reducer: {
    counter: slice,
    cart: cart
  },
});
