import { axiosInstance } from "../lib/axiosInstance";
import type { AxiosResponse } from "axios";

export const siswaService = {
    async getAllSiswa(accessToken: string): Promise<AxiosResponse<GetSiswaResponse>> {
        return await axiosInstance.get("/siswa/kelas/DDUBLJ", {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
    },
};