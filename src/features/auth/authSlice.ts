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
    token:string;
}
const initialState: AuthState ={
    isLoggedIn:false,
    logging: false,
    currentUser: undefined,
    token: '',
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
            state.token = action.payload.accessToken
        },

        loginFailed(state, action:PayloadAction<string>){
            state.logging = false;
        },

        logout(state,){
            state.isLoggedIn = false;
            state.currentUser = undefined;
            state.token = '';
        },
    }
})

//Action
export const authActions = authSlice.actions;

//Selectors
export const selectIsLoggedIn = (state:any) => state.auth.isLoggedIn;
export const selectLogging = (state:any) => state.auth.logging;
export const selectCurrentUser = (state:any) => state.auth.currentUser;
export const selectToken = (state:any) => state.auth.currentUser;
//Reducer
const authReducer = authSlice.reducer;
export default authReducer;