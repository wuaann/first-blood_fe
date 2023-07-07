import {all, call, put, take, takeLatest} from "redux-saga/effects";
import {bugActions, BugPayLoad} from "./bugSlice";
import {PayloadAction} from "@reduxjs/toolkit";
import { BugByProject, BugParams} from "../../models/bugs";
import bugApi from "../../api/bugApi";
import {debounce} from "redux-saga/effects";


function* fetchStatistics() {
    // Implement your logic for fetching statistics here
}

function* fetchBugSolve() {
    // Implement your logic for fetching bug solves here
}
function* fetchMember(action:PayloadAction<BugParams>) {
    try {

        const bugs: BugByProject[] = yield call(
            bugApi.getBugByProjectId,
            action.payload
        );
        yield put(bugActions.setBugAll(bugs));
    } catch (error: any) {
        yield put(bugActions.fetchDataFail(error.message));
    }
}

function* fetchBugAll(action: PayloadAction<BugParams>) {
    try {

        const bugs: BugByProject[] = yield call(
            bugApi.getBugByProjectId,
            action.payload
        );
        yield put(bugActions.setBugAll(bugs));
    } catch (error: any) {
        yield put(bugActions.fetchDataFail(error.message));
    }
}

function* fetchBugData(action: PayloadAction<BugParams>) {
    yield put(bugActions.setBugFilter(action.payload))
    try {
        yield all([
            call(fetchStatistics),
            call(fetchBugSolve),
            call(fetchBugAll, action),
            call(fetchMember, action),
        ]);
    } catch (error: any) {
        yield put(bugActions.fetchDataFail(error.message));
    }
}
function* handleSearchDebouce(action:PayloadAction<BugParams>) {
    yield put(bugActions.setBugFilter(action.payload));
    yield call(fetchBugAll, action);
    // yield put(bugActions.setBugFilter(action.payload))
}


export default function* bugSaga() {
    yield takeLatest(bugActions.fetchData.type, fetchBugData);
    yield takeLatest(bugActions.setFilter.type, handleSearchDebouce);

    yield debounce(500,bugActions.setBugFilterWithDebouce.type, handleSearchDebouce)
}