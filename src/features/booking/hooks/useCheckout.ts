import { useState } from "react";
import { type RoomType, type GuestData, type BookingRequestDto } from "../types/booking.types";
import { useReservations } from "./useReservation";

export const useCheckout = () => {
  const [selectedRoom, setSelectedRoom] = useState<RoomType | null>(null);
  const [guestData, setGuestData] = useState<GuestData>({
    guestName: "", guestLastName: "", guestEmail: "", creditCard: "",
  });

  const [bookingComplete, setBookingComplete] = useState(false);
  const [reservationCode, setReservationCode] = useState("");
  const [localError, setLocalError] = useState<string | null>(null);

  // 1. Consume our new Data Hook
  const { create } = useReservations();

  const handleSelectRoom = (room: RoomType) => setSelectedRoom(room);

  const updateGuestField = (field: keyof GuestData, value: string) => {
    setGuestData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCancelBooking = () => {
    setSelectedRoom(null);
    setLocalError(null);
  };

  const handleAcceptBooking = async (e: React.FormEvent, startDate: string, endDate: string) => {
    e.preventDefault();
    setLocalError(null);

    if (!selectedRoom) return;

    // Map UI State to Backend DTO Structure
    const reservationPayload: BookingRequestDto = {
      RoomTypeId: selectedRoom.id,
      SeasonId: 1,
      CheckIn: new Date(startDate),
      CheckOut: new Date(endDate),
      TotalAmount: 0,
      ClientName: guestData.guestName,
      ClientLastname: guestData.guestLastName,
      email: guestData.guestEmail,
      CardNumber: guestData.creditCard
    };

    // 2. Execute Data Hook
    const { data, hasError, errorMessage } = await create.execute(reservationPayload);

    // 3. Handle Local Errors
    if (hasError) {
      setLocalError(errorMessage || "Failed to complete reservation. Please try again.");
      return;
    }

    if (data) {
      setReservationCode(data.confirmationCode);
      setBookingComplete(true);
    }
  };

  const resetCheckout = () => {
    setBookingComplete(false);
    setSelectedRoom(null);
    setLocalError(null);
    setGuestData({ guestName: "", guestLastName: "", guestEmail: "", creditCard: "" });
  };

  return {
    state: {
      selectedRoom,
      guestData,
      bookingComplete,
      reservationCode,
      error: localError,
      isLoading: create.isLoading // You can pass this to your CheckoutForm Submit button!
    },
    actions: { handleSelectRoom, handleCancelBooking, handleAcceptBooking, resetCheckout, updateGuestField }
  };
};
