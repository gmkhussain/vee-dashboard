import axios from "axios";
import { store } from "../store";
import { removeToken } from '../store/features/userSlice';

const Api = axios.create({
baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 10000,
  withCredentials: true,
});

Api.interceptors.request.use(
  async config => {
    const token = store.getState()?.user?.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

Api.interceptors.response.use(
  response => response,
  error => {
    const { response, message: networkError } = error;
    const errorMessage = response?.data?.message || networkError || "An error occurred";

    if (response?.status === 401 && errorMessage === "Unauthenticated.") {
      store.dispatch(removeToken());
    }

    return response;
    // return Promise.reject(error);
  }
);

export default Api;