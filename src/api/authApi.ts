// api/productApi.ts
import axiosClient from "./axiosClient";
import {LoginPayload} from "../features/auth/authSlice";
import {ListResponse, TokenResponse} from "../models";

const authApi = {
    login: (data: LoginPayload) : Promise<ListResponse<TokenResponse>> => {
        const url = '/login';
        return axiosClient.post(url, data);
    }
}

export default authApi;