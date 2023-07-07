import axiosClient from "./axiosClient";
import { User} from "../models";

const userApi = {
    getCurrentUser: () : Promise<User> => {
        const url = '/current-user';
        return axiosClient.get(url);
    },

    getAllUser: () : Promise<User[]> => {
        const url = '/users';
        return axiosClient.get(url);
    },
    createUser: () : Promise<User[]> => {
        const url = '/users';
        return axiosClient.put(url);
    },
    getMember: (id:string) : Promise<User[]> => {
        const url = `project/member/${id}`;
        return axiosClient.get(url);
    }
}
export default userApi