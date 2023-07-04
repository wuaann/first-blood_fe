import axiosClient from "./axiosClient";
import { Project} from "../models";


const authApi = {
    getProjectOfCurrentUser: () : Promise<Project[]> => {
        const url = '/project_byuser';
        return axiosClient.get(url);
    }
}

export default authApi