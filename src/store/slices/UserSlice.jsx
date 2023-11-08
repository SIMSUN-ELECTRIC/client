import { createSlice} from '@reduxjs/toolkit'

const UserSlice = createSlice({
    name: "Users",
    initialState: {},
    reducers: {
    
        logIn(state,action){
            // console.log("From userslice")
            return  {...state,...action.payload}
        },
        logOut(state, action) {
            return {}; 
          },
    }
})

export { UserSlice } ;
export const {logIn,logOut} = UserSlice.actions;