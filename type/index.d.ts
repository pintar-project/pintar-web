declare interface UserLogin {
    email: string;
    password: string;
}

declare interface User {
    id: string;
    email: string;
    username: string;
    role: string;
    avatar_url: string;
    nama_lengkap: string;
}

declare interface Token {
    access_token: string;
}

declare interface UserLoginResponse {
    message: string;
    data: User
    token: Token
}

declare interface Kelas {
    id: string;
    nama: string;
    deskripsi: string;
    tingkat: string;
    kode_unik: string;
    pembuat: User;
    peserta: User[];
    tahun_ajaran: TahunAjaran;
    created_at: string;
    updated_at: string;
    deleted_at?: string;
}

declare interface TahunAjaran {
    id: string;
    nama: string;
    is_active: boolean;
    semester: number;
}

declare interface GetKelasResponse {
    message: string;
    data: Kelas[];
}

declare interface GetTahunAjaranResponse {
    message: string;
    data: TahunAjaran;
}

declare interface CreateKelasRequest {
    nama: string;
    deskripsi: string;
}

declare interface CreateKelasResponse {
    message: string;
    data: Kelas;
}

declare interface StatistikPemetaan {
    kognitif: {
        jumlah: {
            tinggi: number;
            sedang: number;
            rendah: number;
        };
        persentase: {
            tinggi: number;
            sedang: number;
            rendah: number;
        };
    };
    gaya_belajar: {
        jumlah: {
            auditori: number;
            visual: number;
            kinestetik: number;
        };
        persentase: {
            auditori: number;
            visual: number;
            kinestetik: number;
        };
    };
    jumlah_siswa: number;
}

declare interface GetSiswaResponse {
    message: string;
    statistik_pemetaan: StatistikPemetaan;
    data: SiswaProfile[];
}

declare interface SiswaProfile {
    id: string;
    id_siswa: string;
    user: User;
    gaya_belajar: string;
    kognitif: string;
    keaktifan: string;
}
