import apiClient from "../../../shared/services/apiClient";
import type { Rooms } from "../types/rooms.types";

export async function getRooms(): Promise<Rooms[]> {
  const response = await apiClient.get("/rooms");
  return response.data;
}

export async function getRoomsById(id: string): Promise<Rooms> {
  const response = await apiClient.get(`/rooms/${id}`);
  return response.data;
}
