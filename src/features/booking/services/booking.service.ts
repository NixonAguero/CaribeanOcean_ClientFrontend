import apiClient from "../../../shared/services/apiClient";
import type { Booking } from "../types/booking.types";

export async function getBooking(): Promise<Booking[]> {
  const response = await apiClient.get("/booking");
  return response.data;
}

export async function getBookingById(id: string): Promise<Booking> {
  const response = await apiClient.get(`/booking/${id}`);
  return response.data;
}
