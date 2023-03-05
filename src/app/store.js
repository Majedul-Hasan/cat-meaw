import { configureStore } from '@reduxjs/toolkit';
import catReducer from '../features/cats/catsSlice';



export const store = configureStore({
  reducer: {
    cats: catReducer,    
  },
});
