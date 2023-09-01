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

export interface UserInput {
  name: string;
  email: string;
  role: number;
  password: string;
}

export interface UserUpdateInput {
  id: number;
  name: string;
  email: string;
  role: number;
}

export type DeleteResponse = {
  success: boolean;
  message: string;
  status: number;
};

export interface LoginResponse {
  token: string;
  token_type: string;
  expires_in: number;
}

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

export interface KamionInput {
  sofor_neve: string;
  rendszam: string;
  szal_level_szama: string;
  belepes_datuma: string;
  suly_üres: number;
  suly_tele: number;
  megjegyzes: string;
}

export interface KamionUpdateInput {
  id: number;
  sofor_neve: string;
  rendszam: string;
  szal_level_szama: string;
  belepes_datuma: string;
  kilepes_datuma: string;
  suly_üres: number;
  suly_tele: number;
  megjegyzes: string;
}

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

export interface TeherautoInput {
  sofor_neve: string;
  rendszam: string;
  szal_level_szama: string;
  belepes_datuma: string;
  suly_üres: number;
  suly_tele: number;
  megjegyzes: string;
}

export interface TeherautoUpdateInput {
  id: number;
  sofor_neve: string;
  rendszam: string;
  szal_level_szama: string;
  belepes_datuma: string;
  kilepes_datuma: string;
  suly_üres: number;
  suly_tele: number;
  megjegyzes: string;
}

export interface Szemelyauto {
  id: number;
  sofor_neve: string;
  rendszam: string;
  belepes_datuma: string;
  kilepes_datuma: string;
  megjegyzes: string;
  createdAt: string;
  updatedAt: string;
}

export interface SzemelyautoInput {
  sofor_neve: string;
  rendszam: string;
  belepes_datuma: string;
  megjegyzes: string;
}

export interface SzemelyautoUpdateInput {
  id: number;
  sofor_neve: string;
  rendszam: string;
  belepes_datuma: string;
  kilepes_datuma: string;
  megjegyzes: string;
}

export interface Vagon {
  id: number;
  vagon_szama: string;
  belepes_datuma: string;
  kilepes_datuma: string;
  megjegyzes: string;
  createdAt: string;
  updatedAt: string;
}

export interface VagonInput {
  vagon_szama: string;
  belepes_datuma: string;
  megjegyzes: string;
}

export interface VagonUpdateInput {
  id: number;
  vagon_szama: string;
  belepes_datuma: string;
  kilepes_datuma: string;
  megjegyzes: string;
}
