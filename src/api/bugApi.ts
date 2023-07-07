import axiosClient from "./axiosClient";
import {Bug, BugByProject, BugParams} from "models/bugs";

const bugApi = {
    getAllBug: () : Promise<Bug[]> => {
        const url = '/bugs';
        return axiosClient.get(url);
    },
    getBugByProjectId: (param:BugParams) : Promise<BugByProject[]> => {
        let url = `/project/bug/${param.id}`;
        return axiosClient.get(url,{
            params: param.param
        });
    },


}
export default bugApi