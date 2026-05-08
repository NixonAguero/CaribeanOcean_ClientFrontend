import apiClient from "../../../../shared/services/apiClient";
import type { Add } from "../types/add.types";

export interface Publicity {
  id: number;
  image: string;
}
 
const pubs: Add[] = [
  {
    id: 1,
    imageURL: "src/assets/rooms/JuniorRm.jpg",
    targetURL: "/rooms/junior",
    updatedAt: "2023-01-01",
    updatedBy: 1,
    active: true,
  },
  {
    id: 2,
    imageURL: "src/assets/rooms/PremiunRom.jpg",
    targetURL: "/rooms/premium",
    updatedAt: "2023-01-01",
    updatedBy: 1,
    active: true,
  },
  {
    id: 3,
    imageURL: "src/assets/rooms/StandardRom.jpg",
    targetURL: "/rooms/standard",
    updatedAt: "2023-01-01",
    updatedBy: 1,
    active: true,
  },
];
 
export const getAdds = async (): Promise<Add[]> => {
    const response = await apiClient.get<Add[]>("admin/adds");
  return response.data;
};