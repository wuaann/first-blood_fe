import {authAction, LoginPayload} from "./authSlice";
import {PayloadAction} from "@reduxjs/toolkit";
import { take,fork, call} from 'redux-saga/effects';

function* handleLogin(payload: LoginPayload) {

    
}
function* handleLogout () {

}

function* watchLoginFlow () {
    while (true){
        const isLoggedIn = Boolean(localStorage.getItem('access_token'));
        if(!isLoggedIn){
            const action: PayloadAction<LoginPayload> = yield take(authAction.login.type);
            yield fork(handleLogin,action.payload);
        }

        yield take(authAction.logout.type);
        yield call(handleLogout)
    }
}


export function* authSaga(){

    yield fork(watchLoginFlow);
}