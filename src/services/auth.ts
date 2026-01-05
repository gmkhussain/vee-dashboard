import { AxiosResponse } from "axios";
import Api from "./api";

export const apiSignIn = (payload: {}): Promise<AxiosResponse> => {
  return Api.post("/auth/login", payload);
};

export const signUp = (payload: {}): Promise<AxiosResponse> => {
  return Api.post("/users/signup", payload);
};

export const apiGetUser = (token: string): Promise<AxiosResponse> => {
  return Api.get("/users", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}

export const logout = (token: string): Promise<AxiosResponse> => {
  return Api.post("/logout", {}, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}
