import axiosClient from "./axiosClient";
import { User} from "../models";

const userApi = {
    getCurrentUser: () : Promise<User> => {
        const url = '/current-user';
        return axiosClient.get(url);
    }
}

export default userApi