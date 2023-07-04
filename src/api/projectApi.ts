import axiosClient from "./axiosClient";
import { Project} from "../models";


const projectApi = {
    getProjectOfCurrentUser: () : Promise<Project[]> => {
        const url = '/project_byuser';
        return axiosClient.get(url);
    },
    getAllProjects: () : Promise<Project[]> => {
        const url = '/projects';
        return axiosClient.get(url);
    }
}

export default projectApi;