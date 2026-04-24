//import apiClient from "../../../shared/services/apiClient";
import apiClient from "../../../shared/services/apiClient";
import type { Location } from "../types/location.types";

export async function getLocation(): Promise<Location> {
  console.log("getLocation called");
  const response = await apiClient.get<Location>("/Locations");
  console.log("API response:", response);
  return response.data;
}

