import {call, put, takeLatest} from "redux-saga/effects";
import {projectActions} from "./projectSlice";
import {Project} from "../../models";
import projectApi from "../../api/projectApi";



 function* fetchProjectList(){
    try {
        const res: Project[] = yield call(projectApi.getProjectOfCurrentUser)
        yield put(projectActions.fetchProjectListSuccess(res))
    }catch (e) {
        console.log('failed to fetch project list by current user')
        yield put((projectActions.fetchProjectListFailed()))
    }
 }



export default function* projectSaga(){
    yield takeLatest(projectActions.fetchProjectList, fetchProjectList);
}