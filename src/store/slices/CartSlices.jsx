import { createSlice } from "@reduxjs/toolkit";

// Retrieve cart from local storage or use an empty array
const getInitialCart = () => {
  const storedCart = localStorage.getItem("cart");
  return storedCart ? JSON.parse(storedCart) : [];
};

const cartSlice = createSlice({
  name: "cart",
  initialState: getInitialCart(),
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.find((item) => item.id === action.payload.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }

      // Update local storage
      localStorage.setItem("cart", JSON.stringify(state));
    },
    removeItem: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload);

      if (index !== -1) {
        state.splice(index, 1);
      }

      // Update local storage
      localStorage.setItem("cart", JSON.stringify(state));
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity = quantity;

        // Remove item if quantity becomes zero
        if (quantity === 0) {
          const index = state.findIndex((item) => item.id === id);
          if (index !== -1) {
            state.splice(index, 1);
          }
        }

        // Update local storage
        localStorage.setItem("cart", JSON.stringify(state));
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
