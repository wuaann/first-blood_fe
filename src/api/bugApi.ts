import axiosClient from "./axiosClient";
import { Bug } from "models/bugs";

const bugApi = {
    getAllBug: () : Promise<Bug[]> => {
        const url = '/bugs';
        return axiosClient.get(url);
    },
    getBugByProjectId: (id:string) : Promise<Bug[]> => {
        const url = `/project/bug/${id}`;
        return axiosClient.get(url);
    }
}
export default bugApi