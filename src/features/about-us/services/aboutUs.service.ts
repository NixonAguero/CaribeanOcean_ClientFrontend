import apiClient from "../../../shared/services/apiClient";
import type { AboutUs } from "../types/aboutUs.types";

export async function getAboutUs(): Promise<AboutUs[]> {
  const response = await apiClient.get("/about-us");
  return response.data;
}

export async function getAboutUsById(id: string): Promise<AboutUs> {
  const response = await apiClient.get(`/about-us/${id}`);
  return response.data;
}
