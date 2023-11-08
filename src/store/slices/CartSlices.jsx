import { createSlice} from '@reduxjs/toolkit'

const CartSlice = createSlice({
    name: "Cart",
    initialState: [],
    reducers: {
        addItem(state,action){
            state.push(action.payload)
        },
        removeItem(state,action){
            return state.filter((item) => item!=action.payload)
        },
    }
})

export { CartSlice } ;
export const {addItem,removeItem} = CartSlice.actions;