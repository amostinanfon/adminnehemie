import { createSlice } from '@reduxjs/toolkit';



const userSlice = createSlice({
    name:"user",
    initialState:{
        currentUser: [],
        isFetching:false,
        error:false
    },

    reducers: {

        //LOGIN
        loginStart:(state) =>{
            state.isFetching=true
        },
        loginSuccess:(state,action) =>{
            state.isFetching=false;
            state.currentUser=action.payload
        },
        loginFailure:(state) =>{
            state.isFetching=false;
            state.error=true;
        },

        //GET ALL USERS
        getUserStart:(state) =>{
            state.isFetching=true
        },
        getUserSuccess:(state,action) =>{
            state.isFetching=false;
            state.currentUser=action.payload
        },
        getUserFailure:(state) =>{
            state.isFetching=false;
            state.error=true;
        },
        //DELETE ALL USERS
        deleteUserStart:(state) =>{
            state.isFetching=true
        },
        deleteUserSuccess:(state,action) =>{
            state.isFetching=false;
            state.currentUser.splice(
                state.currentUser.findIndex((item) => item._id === action.payload ),
                1
            )
        },
        deleteUserFailure:(state) =>{
            state.isFetching=false;
            state.error=true;
        },
    },
});


export const { loginStart, 
               loginSuccess, 
               loginFailure,
               getUserStart, 
               getUserSuccess, 
               getUserFailure,
               deleteUserStart, 
               deleteUserSuccess, 
               deleteUserFailure 
            } = userSlice.actions;

export default userSlice.reducer;