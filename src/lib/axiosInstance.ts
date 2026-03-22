import axios from "axios";
import { PUBLIC_API_URL } from "$env/static/public";

export const axiosInstance = axios.create({
    baseURL: PUBLIC_API_URL
});