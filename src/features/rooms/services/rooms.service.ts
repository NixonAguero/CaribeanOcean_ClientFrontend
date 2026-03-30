/*
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
*/
import JuniorRoom from "../../../assets/rooms/JuniorRoom.jpg";
import StandardRoom from "../../../assets/rooms/StandardRoom.jpg";
import PremiunRoom from "../../../assets/rooms/PremiunRoom.jpg";

import type { Room } from "../types/rooms.types";

export async function getRooms(): Promise<Room[]> {
  
  return [
    {
      id: "1",
      title: "Junior Room",
      price: 300,
      image: JuniorRoom, //"../assets/rooms/JuniorRoom.jpg", 
      features: ["1 King Bed", "Free WiFi", "Ocean View"]
    },
    {
      id: "2",
      title: "Standard Room",
      price: 450,
      image: StandardRoom,
      features: ["2 Beds", "Free WiFi", "Balcony"]
    },
    {
      id: "3",
      title: "Premiun Room",
      price: 700,
      image: PremiunRoom,
      features: ["Private Pool", "Ocean View", "King Bed"]
    }
  ];
}
