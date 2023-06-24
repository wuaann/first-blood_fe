import {authAction, LoginPayload} from "./authSlice";
import {PayloadAction} from "@reduxjs/toolkit";
import {put, take, fork, call} from 'redux-saga/effects';
import authApi from "../../api/authApi";
import {TokenResponse} from "../../models";


function* handleLogin(payload: LoginPayload) {
    const data: TokenResponse = yield call(authApi.login, payload);
    if (data) {
        yield put(authAction.loginSuccess(data.data));
    }
    localStorage.setItem('accessToken',data.data.accessToken );
}

function* handleLogout() {

}

function* watchLoginFlow() {
    while (true) {
        const isLoggedIn = Boolean(localStorage.getItem('access_token'));
        if (!isLoggedIn) {
            const action: PayloadAction<LoginPayload> = yield take(authAction.login.type);
            yield fork(handleLogin, action.payload);
        }
        yield take(authAction.logout.type);
        yield call(handleLogout)
    }
}


export function* authSaga() {

    yield fork(watchLoginFlow);
}