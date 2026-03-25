import { axiosInstance } from "../lib/axiosInstance";
import type { AxiosResponse } from "axios";

export const kelasService = {
    async getKelas(accessToken: string): Promise<AxiosResponse<GetKelasResponse>> {
        return await axiosInstance.get("kelas", {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
    },
    async createKelas(accessToken: string, data: CreateKelasRequest): Promise<AxiosResponse<CreateKelasResponse>> {
        return await axiosInstance.post("kelas", data, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
    }
};