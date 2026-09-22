import axios from "axios";
const VITE_PRODUCTION = import.meta.env.VITE_PRODUCTION_URL
const VITE_DEVELOPMENT = import.meta.env.VITE_DEVELOPMENT_URL || "http://localhost:5001"

const api = axios.create({
    baseURL: VITE_DEVELOPMENT
});
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => Promise.reject(error)
);

export default api;
