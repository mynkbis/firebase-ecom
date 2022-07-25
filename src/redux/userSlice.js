import { createSlice } from "@reduxjs/toolkit";

const initialStateValue={name:"",email:""}

const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: initialStateValue
    },
    reducers: {
        login: (state, action) => {
            state.value = action.payload;
        },
         logout: (state, action) => {
            state.value = initialStateValue
         },
        localData: (state, action) => {
             state.value={name:"suryabisht.softprodigy@gmail.com"}
         }
    }
});


export const { login } = userSlice.actions;
export const { localData } = userSlice.actions;
export default userSlice.user;
