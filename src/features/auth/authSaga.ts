import {authAction, LoginPayload} from "./authSlice";
import {PayloadAction} from "@reduxjs/toolkit";
import {put,take,fork, call} from 'redux-saga/effects';
import authApi from "../../api/authApi";
import { Token} from "../../models";



function* handleLogin(payload: LoginPayload) {
    const data:Token = yield call(authApi.login,payload);


    yield put(authAction.loginSuccess(data.user));
    console.log(data.user);

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


export function* authSaga() {

    yield fork(watchLoginFlow);
}