import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Bug} from "../../models/bugs";
import {RootState} from "../../app/store";


export interface BugStatistics{
    BugCount: number;
    BugSolveCount: number;
    BugPendingCount: number;
    BugCancelCount: number;
    BugRejectCount: number;
}
export interface BugState{
    loading: boolean,
    statistics:BugStatistics,
    BugSolve: Bug[],
    BugAll:Bug[],
}

const initialState: BugState = {
    loading:false,
    statistics: {
        BugCount:0,
        BugSolveCount:0,
        BugCancelCount:0,
        BugPendingCount:0,
        BugRejectCount:0
    },
    BugSolve: [],
    BugAll:[],

}


const bugSlice = createSlice({
    name: 'bugs',
    initialState,
     reducers:{
        fetchData(state){
            state.loading= true;
        },
        fetchDataSuccess(state  ){
            state.loading =false
        },
        fetchDataFail(  state){
            state.loading =false
        },
        setStatistics(state,action: PayloadAction<BugStatistics> ){
            state.statistics = action.payload;
        },
        setBugSolve(state   ,action:PayloadAction<Bug[]>){
            state.BugSolve = action.payload;
        },
        setBugAll(state   ,action:PayloadAction<Bug[]>){
            state.BugAll = action.payload
        },

     }
})

export const bugActions = bugSlice.actions;

const selectBugStatistics = (state: RootState) =>state.bug.statistics;
const selectBugLoading = (state: RootState) =>state.bug.loading;
const selectBugAll = (state: RootState) =>state.bug.BugAll;


const bugReducer = bugSlice.reducer;
export default bugReducer;