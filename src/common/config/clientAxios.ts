import axios from "axios";

export const clientAxios = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL
})