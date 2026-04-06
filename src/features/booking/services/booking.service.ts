import apiClient from "../../../shared/services/apiClient";
import type { BookingFilters, RoomType, BookingRequestDto, BookingResponseDto } from "../types/booking.types";
import { MOCK_ROOM_TYPES } from "../types/booking.types";
import { isDateRangeOverlapping } from "../utils/date.utils";
// Movimos la función matemática aquí, actuando como la "query" de Backend

export const bookingService = {
  // 1. Search Availability Mock Function
  searchAvailableRooms: async (filters: BookingFilters): Promise<RoomType[]> => {
    // TODO: Cuando el backend esté listo, borra todo este Promise y descomenta esto:
    // const response = await apiClient.get<RoomType[]>("/rooms/availability", { params: filters });
    // return response.data;

    return new Promise((resolve) => {
      setTimeout(() => {
        let results = MOCK_ROOM_TYPES;

        // A. Filtro por Tipo de Cuarto
        if (filters.roomType) {
          results = results.filter(r => r.type === filters.roomType);
        }

        // B. RESTAURADO: Filtro por Fechas Ocupadas (La base de datos virtual)
        if (filters.startDate && filters.endDate) {
          results = results.filter((room) => {
            const hasConflict = room.bookedDates.some((booking) =>
              isDateRangeOverlapping(filters.startDate, filters.endDate, booking.start, booking.end)
            );
            // Solo devolvemos los cuartos que NO tienen conflicto
            return !hasConflict;
          });
        }

        resolve(results);
      }, 5000); // Simulamos 1 segundo de latencia de red
    });
  },

  // 2. Submit Reservation Mock Function
  createReservation: async (data: BookingRequestDto): Promise<BookingResponseDto> => {
    // TODO: Cuando el backend esté listo, borra todo este Promise y descomenta esto:
    // const response = await apiClient.post<BookingResponseDto>("/reservations", data);
    // return response.data;

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          confirmationCode: `CAB-${Math.random().toString(36).substring(2, 6).toUpperCase()}`,
          status: "CONFIRMED"
        });
      }, 1500); // Simulamos 1.5 segundos procesando el pago/reserva
    });
  }
}
