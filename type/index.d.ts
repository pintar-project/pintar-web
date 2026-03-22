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