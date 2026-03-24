import { axiosInstance } from "../lib/axiosInstance";
import type { AxiosResponse } from "axios";

export interface ModulResponse {
    id: string;
    judul: string;
    tipe: "file" | "link";
    link: string;
    thumbnail: string | null;
    tingkat: string;
    id_mapel: {
        id: string;
        nama_mapel: string;
        kode_mapel: string;
        deskripsi: string;
    };
    pembuat: {
        id: string;
        username: string;
        nama_lengkap: string;
        email: string;
        role: string;
        avatar_url: string;
    };
    tahun_ajaran: {
        id: string;
        nama: string;
        semester: number;
        is_active: boolean;
    };
    created_at: number;
    updated_at: number;
}

export const modulService = {
    async getAllModul(accessToken: string): Promise<AxiosResponse<{ message: string; data: ModulResponse[] }>> {
        return await axiosInstance.get(`/modul`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
    },
};
