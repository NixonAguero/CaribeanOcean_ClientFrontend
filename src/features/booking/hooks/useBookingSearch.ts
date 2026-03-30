import { useState } from "react";
// Aquí debe ir la Interfaz RoomType y el objeto MOCK_ROOM_TYPES que armamos antes
import { type RoomType, MOCK_ROOM_TYPES, type BookingFilters } from "../types/booking.types"; // (Sugiero guardar esos mocks/interfaces en una carpeta types/)
import { useLoading } from "../../../shared/hooks/useLoading";
import { bookingService } from "../services/booking.service";



export const useBookingSearch = () => {
  const [filter, setFilters] = useState<BookingFilters>({
    startDate: "",
    endDate: "",
    roomType: "",
  })


  const [hasSearched, setHasSearched] = useState(false);
  const [availableRooms, setAvailableRooms] = useState<RoomType[]>([]);
  const [isRecommendation, setIsRecommendation] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const loadingHook = useLoading(false)

  const updateFilter = (field: keyof BookingFilters, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [field]: value,
    }));
  };


  const handleSearch =  async (e: React.SubmitEvent) => {
    e.preventDefault();
    setHasSearched(true);
    setIsRecommendation(false);
    setError(null);

 


    if (new Date(filter.startDate) >= new Date(filter.endDate)) {
      setError("Oops! It looks like your check-out date is before your arrival. Please adjust your dates so we can find your perfect room.");
      setAvailableRooms([]);
      return;
    }
    
    try{
     const results = await loadingHook.withLoading(() => bookingService.searchAvailableRooms(filter));
     if(results.length === 0) {
      setIsRecommendation(true);
      setAvailableRooms(MOCK_ROOM_TYPES);
     } else {
      setAvailableRooms(results);
     }
    } catch (e:any) {
      setError("We couldn't connect to our servers. Please try again.");
    } 

  
  };
  const resetSearch = () => {
    setHasSearched(false);
    setAvailableRooms([]);
    setIsRecommendation(false);
    setError(null);
    setFilters({
      startDate: "",
      endDate: "",
      roomType: "",
    });
  };
  return {
    state: { filter, hasSearched, availableRooms, isRecommendation, error, isLoading: loadingHook.isLoading },
    actions: { updateFilter, handleSearch, resetSearch }
  };
};