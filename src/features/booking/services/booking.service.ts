import apiClient from "../../../shared/services/apiClient";
import { MOCK_ROOM_TYPES, type BookingFilters, type BookingRequestDto, type BookingResponseDto, type RoomType } from "../types/booking.types";


export const bookingService =  {
  searchAvailableRooms: async (filters: BookingFilters ) : Promise<RoomType[]> => {
     // TODO: When backend is ready, replace everything below with this line:
    // const response = await apiClient.get<RoomType[]>("/rooms/availability", { params: filters });
    // return response.data;

    return new Promise ((resolve) => {
       setTimeout(() => {
        let results = MOCK_ROOM_TYPES
        if(filters.roomType) {
          results = results.filter(r => r.type === filters.roomType)
        }
        resolve(results)
       }, 1000)
    })
  },

  createReservation: async (data: BookingRequestDto): Promise<BookingResponseDto> => {
    // TODO: When backend is ready, replace implementation with:
    // const response = await apiClient.post<BookingResponseDto>("/reservations", data);
    // return response.data;
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          confirmationCode: `CAB-${Math.random().toString(36).substring(2, 6).toUpperCase()}`,
          status: "CONFIRMED" //preguntar si el status lo deberia manejar así o con otro estandar 
        });
      }, 1500);
    });
  }
  
}
