import customAxios from "../config/http";
import axios from "axios";
import {
  User,
  LoginResponse,
  Kamion,
  Teherauto,
  Szemelyauto,
  Vagon,
  KamionInput,
  KamionUpdateInput,
  TeherautoInput,
  TeherautoUpdateInput,
  SzemelyautoInput,
  SzemelyautoUpdateInput,
  VagonInput,
  VagonUpdateInput,
  DeleteResponse,
  UserInput,
  UserUpdateInput,
} from "./interfaces";
const baseURL = import.meta.env.VITE_BASE_URL;

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

export const getExcelExport = async () => {
  const response = await customAxios.get("/excelExport", {
    responseType: "blob",
  });
  const blob = new Blob([response.data]);
  const url = window.URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "Erdért_Excel_" + new Date().toLocaleDateString() + ".xlsx";
  document.body.appendChild(a);
  a.click();
  window.URL.revokeObjectURL(url);
};

export const getUser = async (): Promise<User> => {
  const response = await customAxios.get("/user");
  if (response.status !== 200) {
    throw new Error("Invalid credentials");
  }
  return response.data;
};

export const getAllUser = async (): Promise<User[]> => {
  const response = await customAxios.get("/getAllUser");
  if (response.status !== 200) {
    throw new Error("Invalid credentials");
  }
  return response.data;
};

export const deleteUser = async (id: number): Promise<DeleteResponse> => {
  const response = await customAxios.delete(`/deleteUser/${id}`);
  return response.data;
};

export const addUser = async (user: UserInput): Promise<User> => {
  const response = await customAxios.post("/addUser", user);
  return response.data;
};

export const updateUser = async (user: UserUpdateInput): Promise<User> => {
  const response = await customAxios.put("/updateUser", user);
  return response.data;
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

export const getAllKamions = async (): Promise<Kamion[]> => {
  const response = await customAxios.get("/allKamionok");
  if (response.status !== 200) {
    throw new Error("Invalid credentials");
  }
  return response.data;
};

export const createKamion = async (kamion: KamionInput): Promise<Kamion> => {
  const response = await customAxios.post("/kamionok", kamion);
  return response.data;
};

export const updateKamion = async (
  kamion: KamionUpdateInput
): Promise<Kamion> => {
  const response = await customAxios.put("/kamionok", kamion);
  return response.data;
};

export const deleteKamion = async (id: number): Promise<DeleteResponse> => {
  const response = await customAxios.delete(`/kamionok/${id}`);
  return response.data;
};

export const getAllTeherauto = async (): Promise<Teherauto[]> => {
  const response = await customAxios.get("/allTeherautok");
  if (response.status !== 200) {
    throw new Error("Invalid credentials");
  }
  return response.data;
};

export const createTeherauto = async (
  teherauto: TeherautoInput
): Promise<Teherauto> => {
  const response = await customAxios.post("/teherautok", teherauto);
  return response.data;
};

export const updateTeherauto = async (
  teherauto: TeherautoUpdateInput
): Promise<Teherauto> => {
  const response = await customAxios.put("/teherautok", teherauto);
  return response.data;
};

export const deleteTeherauto = async (id: number): Promise<DeleteResponse> => {
  const response = await customAxios.delete(`/teherauto/${id}`);
  return response.data;
};

export const getAllSzemelyauto = async (): Promise<Szemelyauto[]> => {
  const response = await customAxios.get("/allSzemelygepkocsik");
  if (response.status !== 200) {
    throw new Error("Invalid credentials");
  }
  return response.data;
};

export const createSzemelyauto = async (
  szemelyauto: SzemelyautoInput
): Promise<Szemelyauto> => {
  const response = await customAxios.post("/szemelygepkocsik", szemelyauto);
  return response.data;
};

export const updateSzemelyauto = async (
  szemelyauto: SzemelyautoUpdateInput
): Promise<Szemelyauto> => {
  const response = await customAxios.put("/szemelygepkocsik", szemelyauto);
  return response.data;
};

export const deleteSzemelyauto = async (
  id: number
): Promise<DeleteResponse> => {
  const response = await customAxios.delete(`/szemelyauto/${id}`);
  return response.data;
};

export const getAllVagon = async (): Promise<Vagon[]> => {
  const response = await customAxios.get("/allVagons");
  if (response.status !== 200) {
    throw new Error("Invalid credentials");
  }
  return response.data;
};

export const createVagon = async (vagon: VagonInput): Promise<Vagon> => {
  const response = await customAxios.post("/vagons", vagon);
  return response.data;
};

export const updateVagon = async (vagon: VagonUpdateInput): Promise<Vagon> => {
  const response = await customAxios.put("/vagons", vagon);
  return response.data;
};

export const deleteVagon = async (id: number): Promise<DeleteResponse> => {
  const response = await customAxios.delete(`/vagon/${id}`);
  return response.data;
};
