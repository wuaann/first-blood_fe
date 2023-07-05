import {all, call, put, takeLatest} from "redux-saga/effects";
import {bugActions} from "./bugSlice";



function* fetchStatistics(){

}
function* fetchBugSolve(){}
function* fetchBugAll(){}

function*  fetchBugData(){
    try {
        yield all([
            call(fetchStatistics),
            call(fetchBugSolve),
            call(fetchBugAll),
        ]);
    }catch (e:any){
        yield put(bugActions.fetchDataFail(e))
    }
}

export default function* bugSaga(){
    yield takeLatest(bugActions.fetchData.type, fetchBugData);
}