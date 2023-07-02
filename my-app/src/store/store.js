import { configureStore } from '@reduxjs/toolkit';

import cartReducer from '../features/slice/cartSlice';
import sidebarReducer from '../features/slice/sidebarSlice';
import pizzaReducer from '../features/slice/pizzaSlice';

const store = configureStore({
    reducer: {
        cart: cartReducer,
        sidebar: sidebarReducer,
        pizza: pizzaReducer
    }
});

export default store;