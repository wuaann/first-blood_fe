import {Project, User} from "../../models";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";

export interface ProjectPayLoad {
    project_id?: string
}

export interface ProjectState{
    loading: boolean,
    projectByUser: Project[],
    member:User[],
}

const initialState:ProjectState = {
    loading: false,
    projectByUser:[],
    member:[]
}

const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers:{
        fetchProjectList(state){
            state.loading = true
        },
        fetchProjectListSuccess(state,action:PayloadAction<Project[]>){
            state.projectByUser = action.payload;
            state.loading=false
        },
        fetchProjectListFailed(state){
            state.loading=false
        },
        setMember(state,action:PayloadAction<User[]>){
            state.member= action.payload
        },
        fetchMember(state,action:PayloadAction<string>){

        },
    }
})

export const projectActions = projectSlice.actions;
export const selectProjectByUser = (state:RootState) => state.projects.projectByUser;
export const selectLoading = (state:RootState) => state.projects.loading;
export const selectMember = (state:RootState) => state.projects.member;

export const projectReducer = projectSlice.reducer;
