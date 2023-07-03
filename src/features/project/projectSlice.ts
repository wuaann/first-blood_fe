import {Project} from "../../models";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";



export interface ProjectState{
    loading: boolean,
    projectByUser: Project[],
}

const initialState:ProjectState = {
    loading: false,
    projectByUser:[]
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
    }
})

export const projectActions = projectSlice.actions;
export const selectProjectByUser = (state:RootState) => state.projects.projectByUser;

export const projectReducer = projectSlice.reducer;
