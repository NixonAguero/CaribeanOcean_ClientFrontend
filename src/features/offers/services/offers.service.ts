import apiClient from "../../../shared/services/apiClient";
import type { Offers } from "../types/offers.types";

export async function getOffers(): Promise<Offers[]> {
  const response = await apiClient.get("/offers");
  return response.data;
}

export async function getOffersById(id: string): Promise<Offers> {
  const response = await apiClient.get(`/offers/${id}`);
  return response.data;
}
