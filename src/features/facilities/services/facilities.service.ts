import apiClient from "../../../shared/services/apiClient";
import type { Facilities } from "../types/facilities.types";

export async function getFacilities(): Promise<Facilities[]> {
  const response = await apiClient.get("/facilities");
  return response.data;
}

export async function getFacilitiesById(id: string): Promise<Facilities> {
  const response = await apiClient.get(`/facilities/${id}`);
  return response.data;
}
