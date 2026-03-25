import { axiosInstance } from "../lib/axiosInstance";
import type { AxiosResponse } from "axios";

export const tahunAjaranService = {
    async getTahunAjaran(accessToken: string): Promise<AxiosResponse<GetTahunAjaranResponse>> {
        return await axiosInstance.get("tahun-ajaran", {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
    }
};