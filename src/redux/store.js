import { configureStore } from '@reduxjs/toolkit';
import donorReducer from './donorSlice';
export const store = configureStore({
    reducer: {
        donors: donorReducer,
    },
});