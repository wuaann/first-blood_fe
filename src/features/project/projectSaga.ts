import {call, put, takeLatest} from "redux-saga/effects";
import {projectActions} from "./projectSlice";
import {Project, User} from "../../models";
import projectApi from "../../api/projectApi";
import UserApi from "../../api/userApi";
import {PayloadAction} from "@reduxjs/toolkit";



 function* fetchProjectList(){
    try {
        const res: Project[] = yield call(projectApi.getProjectOfCurrentUser)
        yield put(projectActions.fetchProjectListSuccess(res))
    }catch (e) {
        console.log('failed to fetch project list by current user')
        yield put((projectActions.fetchProjectListFailed()))
    }
 }

 function* fetchMemberList(action:PayloadAction<string>){
    try {
        const res: User[] = yield call(UserApi.getMember,action.payload)
        yield put(projectActions.setMember(res))
    }catch (e) {
        console.log('failed to fetch project list by current user')
        yield put((projectActions.fetchProjectListFailed()))
    }
 }



export default function* projectSaga(){
    yield takeLatest(projectActions.fetchProjectList, fetchProjectList);
    yield takeLatest(projectActions.fetchMember, fetchMemberList);
}