import {authActions, LoginPayload, selectCurrentUser} from "./authSlice";
import {PayloadAction} from "@reduxjs/toolkit";
import {put, take,takeEvery, fork, call, takeLatest} from 'redux-saga/effects';
import authApi from "../../api/authApi";
import { TokenResponse, User} from "../../models";
import userApi from "../../api/userApi";


function* handleLogin(payload: LoginPayload) {
    try {
        const data: TokenResponse = yield call(authApi.login, payload);
        if (data) {
            yield put(authActions.loginSuccess(data.accessToken));
        }
        localStorage.setItem('accessToken', data.accessToken);
    } catch (error: any) {
        yield put(authActions.loginFailed(error.message));
    }
}

function* handleLogout() {
    localStorage.removeItem('accessToken');
    yield put(authActions.logout)
}

function* FetchCurrentUser() {
        const data: User = yield call(userApi.getCurrentUser);
        console.log(data)
        yield put(authActions.setCurrentUser(data))}

function* watchLoginFlow() {
    while (true) {
        const isLoggedIn = Boolean(localStorage.getItem('accessToken'));
        if (!isLoggedIn) {
            const action: PayloadAction<LoginPayload> = yield take(authActions.login.type);
            yield fork(handleLogin, action.payload)
        } else {
            yield take(authActions.logout.type);
            yield call(handleLogout)
        }
    }

}


export function* authSaga() {
    yield takeEvery(authActions.getCurrentUser,FetchCurrentUser)
    yield call(watchLoginFlow);
}