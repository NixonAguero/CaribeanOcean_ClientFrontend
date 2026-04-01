import apiClient from "../../../shared/services/apiClient";
import type { Galery } from "../types/galery.types";

export async function getGalery(): Promise<Galery[]> {
  const response = await apiClient.get("/galery");
  return response.data;
}

export async function getGaleryById(id: string): Promise<Galery> {
  const response = await apiClient.get(`/galery/${id}`);
  return response.data;
}
