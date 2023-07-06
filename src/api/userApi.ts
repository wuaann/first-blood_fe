import axiosClient from "./axiosClient";
import { User, CreateUser } from "../models";

const userApi = {
  getCurrentUser: (): Promise<User> => {
    const url = '/current-user';
    return axiosClient.get(url);
  },

  getAllUser: (): Promise<User[]> => {
    const url = '/users';
    return axiosClient.get(url);
  },

  createUser: (user: CreateUser): Promise<User> => {
    const url = '/user';
    return axiosClient.post(url, user);
  },

  updateUser: (id: string, user: User): Promise<User> => {
    const url = `/user/${id}`;
    return axiosClient.put(url, user);
  },
  getUserById: (id: string): Promise<User> => {
    const url = `/user/${id}`;
    return axiosClient.get(url);
},
  deleteUser: (userId: number): Promise<void> => {
    const url = `/user/${userId}`;
    return axiosClient.delete(url);
  },
};

export default userApi;
