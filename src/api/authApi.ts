// api/productApi.ts
import axiosClient from "./axiosClient";
import {LoginPayload} from "../features/auth/authSlice";
import {ListResponse, Token} from "../models";

const authApi = {
    login: (data: LoginPayload) : Promise<ListResponse<Token>> => {
        const url = '/login';
        return axiosClient.post(url, data);
    }
}

export default authApi;