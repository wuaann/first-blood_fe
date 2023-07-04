import axiosClient from "./axiosClient";
import {Project, ProjectAdmin} from "../models";


const projectApi = {
    getProjectOfCurrentUser: () : Promise<Project[]> => {
        const url = '/project_byuser';
        return axiosClient.get(url);
    },
    getAllProjects: () : Promise<ProjectAdmin[]> => {
        const url = '/projects';
        return axiosClient.get(url);
    }
}

export default projectApi;