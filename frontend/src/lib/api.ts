import { useMutation, useQuery } from "@tanstack/react-query";
import customAxios from "../config/http";
import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

export interface User {
  id: number;
  name: string;
  email: string;
  role: number;
  email_verified_at: string | null;
  createdAt: string;
  updatedAt: string;
  photo_url: string;
}

export interface LoginResponse {
  token: string;
  token_type: string;
  expires_in: number;
}

export const logIn = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  const response = await axios.post(baseURL + "/login", {
    email,
    password,
  });
  return response.data;
};

export const signUp = async (
  name: string,
  email: string,
  password: string,
  password_confirmation: string
): Promise<unknown> => {
  const response = await axios.post(baseURL + "/register", {
    name,
    email,
    password,
    password_confirmation,
  });
  if (response.status !== 200) {
    throw new Error("Invalid credentials");
  }
  return response.data;
};

export const getUser = async (): Promise<User> => {
  const response = await customAxios.get("/user");
  if (response.status !== 200) {
    throw new Error("Invalid credentials");
  }
  return response.data;
};

export const useGetUserQuery = () => {
  return useQuery<User>(["user"], getUser);
};

export const getAllUser = async (): Promise<User[]> => {
  const response = await customAxios.get("/getAllUser");
  if (response.status !== 200) {
    throw new Error("Invalid credentials");
  }
  return response.data;
};

export const useGetAllUserQuery = () => {
  return useQuery<User[]>(["users"], getAllUser);
};

export const logOut = async (): Promise<void> => {
  localStorage.removeItem("token");
  const response = await customAxios.post("/logout");
  console.log(response);
};

export const changeSettings = async (
  name: string,
  email: string
): Promise<User> => {
  const response = await customAxios.patch("/settings/profile", {
    name,
    email,
  });
  return response.data;
};
export const useSettingsMutation = () => {
  return useMutation((credential: { name: string; email: string }) =>
    changeSettings(credential.name, credential.email)
  );
};

export interface Kamion {
  id: number;
  sofor_neve: string;
  rendszam: string;
  szal_level_szama: number;
  belepes_datuma: string;
  kilepes_datuma: string;
  suly_üres: number;
  suly_tele: number;
  megjegyzes: string;
  createdAt: string;
  updatedAt: string;
}
export const getAllKamions = async (): Promise<Kamion[]> => {
  const response = await customAxios.get("/allKamionok");
  if (response.status !== 200) {
    throw new Error("Invalid credentials");
  }
  return response.data;
};

export const useGetAllKamionsQuery = () => {
  return useQuery<Kamion[]>(["kamions"], getAllKamions);
};

export interface Teherauto {
  id: number;
  sofor_neve: string;
  rendszam: string;
  szal_level_szama: number;
  belepes_datuma: string;
  kilepes_datuma: string;
  suly_üres: number;
  suly_tele: number;
  megjegyzes: string;
  createdAt: string;
  updatedAt: string;
}

export const getAllTeherauto = async (): Promise<Teherauto[]> => {
  const response = await customAxios.get("/allTeherautok");
  if (response.status !== 200) {
    throw new Error("Invalid credentials");
  }
  return response.data;
};

export const useGetAllTeherautoQuery = () => {
  return useQuery<Teherauto[]>(["teherautos"], getAllTeherauto);
};

export interface Szemelyauto {
  id: number;
  sofor_neve: string;
  rendszam: string;
  // szal_level_szama: number;
  belepes_datuma: string;
  kilepes_datuma: string;
  // suly_üres: number;
  // suly_tele: number;
  megjegyzes: string;
  createdAt: string;
  updatedAt: string;
}

export const getAllSzemelyauto = async (): Promise<Szemelyauto[]> => {
  const response = await customAxios.get("/allSzemelygepkocsik");
  if (response.status !== 200) {
    throw new Error("Invalid credentials");
  }
  return response.data;
};

export const useGetAllSzemelyautoQuery = () => {
  return useQuery<Szemelyauto[]>(["szemelyautos"], getAllSzemelyauto);
};

export interface Vagon {
  id: number;
  // sofor_neve: string;
  // rendszam: string;
  // szal_level_szama: number;
  vagon_szama: string;
  belepes_datuma: string;
  kilepes_datuma: string;
  // suly_üres: number;
  // suly_tele: number;
  megjegyzes: string;
  createdAt: string;
  updatedAt: string;
}

export const getAllVagon = async (): Promise<Vagon[]> => {
  const response = await customAxios.get("/allVagons");
  if (response.status !== 200) {
    throw new Error("Invalid credentials");
  }
  return response.data;
};

export const useGetAllVagonQuery = () => {
  return useQuery<Vagon[]>(["vagonok"], getAllVagon);
};
