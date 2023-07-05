import {authSaga} from "../features/auth/authSaga";
import { all } from 'redux-saga/effects';
import projectSaga from "../features/project/projectSaga";
import bugSaga from "../features/bug/bugSaga";
export default function* rootSaga(){
    yield all([authSaga(), projectSaga(),bugSaga()]);
}