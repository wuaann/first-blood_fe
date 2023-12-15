import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {BugByProject, Steps} from "../../models/bugs";
import {RootState} from "../../app/store";
import { BugParams} from "../../models/bugs";
import {User} from "../../models";
import {Simulate} from "react-dom/test-utils";

export interface BugPayLoad {
    project_id?: string
}

export interface BugStatistics {
    BugCount: number;
    BugSolveCount: number;
    BugPendingCount: number;
    BugCancelCount: number;
    BugRejectCount: number;
}

export interface BugState {
    loading: boolean,
    statistics: BugStatistics,
    BugSolve: BugByProject[],
    BugAll: BugByProject[],
    BugFilter: BugParams
    member?:User[]
    steps?:Steps[]

}

const initialState: BugState = {
    loading: false, statistics: {
        BugCount: 0,
        BugSolveCount: 0,
        BugCancelCount: 0,
        BugPendingCount: 0,
        BugRejectCount: 0
    },
    BugSolve: [],
    BugAll: [],
    BugFilter:{
        id:'',
        param:{}
    },
    member:[],
    steps:[]


}


const bugSlice = createSlice({
    name: 'bugs',
    initialState,
    reducers: {
        fetchData(state, action: PayloadAction<BugParams>) {
            state.loading = true;
        },
        fetchDataSuccess(state) {
            state.loading = false
        }, fetchDataFail(state) {
            state.loading = false
        }, setStatistics(state, action: PayloadAction<BugStatistics>) {
            state.statistics = action.payload;
        }, setBugSolve(state, action: PayloadAction<BugByProject[]>) {
            state.BugSolve = action.payload;
        },

        setBugAll(state, action: PayloadAction<BugByProject[]>) {
            state.BugAll = action.payload
            state.loading =false
        },
        setMember(state, action: PayloadAction<User[]>) {
            state.member = action.payload
        },

        setBugFilter(state, action:PayloadAction<BugParams>){
            state.BugFilter= action.payload
        },

        setBugFilterWithDebouce(state, action:PayloadAction<BugParams>){
            state.loading = true
        },
        setFilter(state,action:PayloadAction<BugParams>){
            state.loading =true
        },
        setSteps(state,action:PayloadAction<Steps[]>){
            state.steps =action.payload
            state.loading = false
        },

        getSteps(state,action:PayloadAction<number>){
            state.loading =true
        }


    }
})

export const bugActions = bugSlice.actions;

export const selectBugStatistics = (state: RootState) => state.bug.statistics;
export const selectBugLoading = (state: RootState) => state.bug.loading;
export const selectBugAll = (state: RootState) => state.bug.BugAll;
export const selectSteps = (state: RootState) => state.bug.steps;


const bugReducer = bugSlice.reducer;
export default bugReducer;