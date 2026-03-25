import { axiosInstance } from "../lib/axiosInstance";
import type { AxiosResponse } from "axios";

export const authService = {
    async userLogin(data: UserLogin): Promise<AxiosResponse<UserLoginResponse>> {
        return await axiosInstance.post("auth/login", data);
    }
};