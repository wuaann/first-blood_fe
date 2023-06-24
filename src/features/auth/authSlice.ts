import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TokenResponse} from "../../models";



    
export interface LoginPayload {
    username: string;
    password: string;
}

export interface AuthState{
    isLoggedIn: boolean;
    logging?: boolean;
    currentUser?: TokenResponse["data"]['user'];
}
const initialState: AuthState ={
    isLoggedIn:false,
    logging: false,
    currentUser: undefined,
}

const authSlice = createSlice({
    name: 'auth',
    initialState ,
    reducers: {
        login(state, action:PayloadAction<LoginPayload>){
            state.logging = true
        },

        loginSuccess(state, action:PayloadAction<TokenResponse['data']>){
            state.logging = false;
            state.isLoggedIn=true;
            state.currentUser = action.payload.user
        },

        loginFailed(state, action:PayloadAction<string>){
            state.logging = false;
        },

        logout(state,){
            state.isLoggedIn = false;
            state.currentUser = undefined;
        },
    }
})

//Action
export const authAction = authSlice.actions;

//Selectors
export const selectIsLoggedIn = (state:any) => state.auth.isLoggedIn;
export const selectLogging = (state:any) => state.auth.logging;
export const selectCurrentUser = (state:any) => state.auth.currentUser;
//Reducer
const authReducer = authSlice.reducer;
export default authReducer;