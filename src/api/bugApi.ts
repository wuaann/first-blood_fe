import axiosClient from "./axiosClient";
import { Bug } from "models/bugs";

const bugApi = {
    getAllBug: () : Promise<Bug[]> => {
        const url = '/bugs';
        return axiosClient.get(url);
    }
}
export default bugApi