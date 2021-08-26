import { configureStore } from '@reduxjs/toolkit';
import slice from '../slicersFont';

export const store = configureStore({
  reducer: {
    counter: slice,
  },
});
