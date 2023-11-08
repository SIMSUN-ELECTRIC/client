import { configureStore } from "@reduxjs/toolkit";
import { UserSlice } from "./slices/UserSlice";
import { CartSlice } from "./slices/CartSlices";

const store = configureStore({
    reducer: {
        user: UserSlice.reducer,
        cart: CartSlice.reducer
    }   
})

export default store;