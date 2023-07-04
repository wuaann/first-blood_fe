import axiosClient from "./axiosClient";
import { User} from "../models";

const userApi = {
    getCurrentUser: () : Promise<User> => {
        const url = '/current_user';
        return axiosClient.get(url);
    },

    getAllUser: () : Promise<User[]> => {
        const url = '/users';
        return axiosClient.get(url);
    },
    createUser: () : Promise<User[]> => {
        const url = '/users';
        return axiosClient.put(url);
    }
}
export default userApi