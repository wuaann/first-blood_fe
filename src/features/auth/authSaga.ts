import {authActions, LoginPayload} from "./authSlice";
import {PayloadAction} from "@reduxjs/toolkit";
import {put, take, fork, call} from 'redux-saga/effects';
import authApi from "../../api/authApi";
import {TokenResponse} from "../../models";


function* handleLogin(payload: LoginPayload) {
    try{
    const data: TokenResponse = yield call(authApi.login, payload);
    if (data) {
        yield put(authActions.loginSuccess(data.data));
    }
    localStorage.setItem('accessToken',data.data.accessToken );
    }catch (error:any) {
        yield put(authActions.loginFailed(error.message));
    }
}

function* handleLogout() {
    localStorage.removeItem('accessToken');
    yield put(authActions.logout)
}

function* watchLoginFlow() {
    while (true) {
        const isLoggedIn = Boolean(localStorage.getItem('accessToken'));
        if (!isLoggedIn) {
            const action: PayloadAction<LoginPayload> = yield take(authActions.login.type);
            yield fork(handleLogin, action.payload);
        }else {

            yield take(authActions.logout.type);
            yield call(handleLogout)
        }
    }

}


export function* authSaga() {

    yield fork(watchLoginFlow);
}