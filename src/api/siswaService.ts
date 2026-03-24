import { axiosInstance } from "../lib/axiosInstance";
import type { AxiosResponse } from "axios";

export const siswaService = {
    async getAllSiswa(accessToken: string, kode_kelas: string): Promise<AxiosResponse<GetSiswaResponse>> {
        return await axiosInstance.get(`/siswa/kelas/${kode_kelas}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
    },
};