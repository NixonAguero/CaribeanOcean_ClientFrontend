import { useState } from "react";
import { type RoomType, type GuestData } from "../types/booking.types"; 


export const useCheckout = () => {
  const [selectedRoom, setSelectedRoom] = useState<RoomType | null>(null);
  const [guestData, setGuestData] = useState({
    guestName: "",
    guestLastName: "",
    guestEmail: "",
    creditCard: "",
  });

  const [bookingComplete, setBookingComplete] = useState(false);
  const [reservationCode, setReservationCode] = useState("");

  const handleSelectRoom = (room: RoomType) => {
    setSelectedRoom(room);
  };

  const updateGuestField = (field: keyof GuestData, value: string) => {
  setGuestData((prev) => ({
    ...prev,
    [field]: value,
  }));
};

  const handleCancelBooking = () => {
    setSelectedRoom(null);
  };

  // Necesitamos pasarle las fechas de la búsqueda para mandar el JSON completo al backend
  const handleAcceptBooking = (e: React.SubmitEvent, startDate: string, endDate: string) => {
    e.preventDefault();
    
    // Aquí es donde mandaremos a tu Backend cuando esté construido:
    const reservationPayload = {
      room_type_id: selectedRoom?.id,
      start_date: startDate,
      end_date: endDate,
      guest_data: { name: guestData.guestName, last_name: guestData.guestLastName, email: guestData.guestEmail, credit_card: guestData.creditCard }
    };
    console.log("Enviando al Backend:", reservationPayload);
    
    setReservationCode(Math.random().toString(36).substring(2, 14).toUpperCase());
    setBookingComplete(true);
  };

  const resetCheckout = () => {
    setBookingComplete(false);
    setSelectedRoom(null);
    setGuestData({
      guestName: "",
      guestLastName: "",
      guestEmail: "",
      creditCard: "",
    });
  };

  return {
    state: { selectedRoom, guestData, bookingComplete, reservationCode },
    actions: { handleSelectRoom, handleCancelBooking, handleAcceptBooking, resetCheckout, updateGuestField }
  };
};
