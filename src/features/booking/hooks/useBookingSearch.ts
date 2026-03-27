import { useState } from "react";
// Aquí debe ir la Interfaz RoomType y el objeto MOCK_ROOM_TYPES que armamos antes
import { type RoomType, MOCK_ROOM_TYPES } from "../types/booking.types"; // (Sugiero guardar esos mocks/interfaces en una carpeta types/)
export const useBookingSearch = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [roomType, setRoomType] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [availableRooms, setAvailableRooms] = useState<RoomType[]>([]);
  const [isRecommendation, setIsRecommendation] = useState(false);
  const isOverlapping = (userStart: string, userEnd: string, bookedStart: string, bookedEnd: string) => {
    const s1 = new Date(userStart).getTime();
    const e1 = new Date(userEnd).getTime();
    const s2 = new Date(bookedStart).getTime();
    const e2 = new Date(bookedEnd).getTime();
    return s1 < e2 && s2 < e1;
  };
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSearched(true);
    setIsRecommendation(false);
    if (new Date(startDate) >= new Date(endDate)) {
      alert("Error: Return date must be strictly after Start date.");
      setAvailableRooms([]);
      return;
    }
    let results = MOCK_ROOM_TYPES;
    if (roomType) {
      results = results.filter((room) => room.type === roomType);
      if (results.length === 0) {
        setIsRecommendation(true);
        results = MOCK_ROOM_TYPES;
      }
    }
    const availableByDate = results.filter((room) => {
      return !room.bookedDates.some((booking) =>
        isOverlapping(startDate, endDate, booking.start, booking.end)
      );
    });
    results = availableByDate;
    if (results.length === 0) {
      setIsRecommendation(true);
      setAvailableRooms(MOCK_ROOM_TYPES);
    } else {
      setAvailableRooms(results);
    }
  };
  const resetSearch = () => {
    setHasSearched(false);
    setAvailableRooms([]);
    setStartDate("");
    setEndDate("");
    setRoomType("");
  };
  return {
    state: { startDate, endDate, roomType, hasSearched, availableRooms, isRecommendation },
    actions: { setStartDate, setEndDate, setRoomType, handleSearch, resetSearch }
  };
};