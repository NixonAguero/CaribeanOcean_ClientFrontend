import apiClient from "../../../shared/services/apiClient";
import type { Locations } from "../types/locations.types";

export async function getLocations(): Promise<Locations[]> {
  const response = await apiClient.get("/locations");
  return response.data;
}

export async function getLocationsById(id: string): Promise<Locations> {
  const response = await apiClient.get(`/locations/${id}`);
  return response.data;
}
