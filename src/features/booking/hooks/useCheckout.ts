import { useState } from "react";
import { type RoomType } from "../types/booking.types"; 

export const useCheckout = () => {
  const [selectedRoom, setSelectedRoom] = useState<RoomType | null>(null);
  const [guestName, setGuestName] = useState("");
  const [guestLastName, setGuestLastName] = useState("");
  const [guestEmail, setGuestEmail] = useState("");
  const [creditCard, setCreditCard] = useState("");

  const [bookingComplete, setBookingComplete] = useState(false);
  const [reservationCode, setReservationCode] = useState("");

  const handleSelectRoom = (room: RoomType) => {
    setSelectedRoom(room);
  };

  const handleCancelBooking = () => {
    setSelectedRoom(null);
  };

  // Necesitamos pasarle las fechas de la búsqueda para mandar el JSON completo al backend
  const handleAcceptBooking = (e: React.FormEvent, startDate: string, endDate: string) => {
    e.preventDefault();
    
    // Aquí es donde mandaremos a tu Backend cuando esté construido:
    const reservationPayload = {
      room_type_id: selectedRoom?.id,
      start_date: startDate,
      end_date: endDate,
      guest_data: { name: guestName, last_name: guestLastName, email: guestEmail, credit_card: creditCard }
    };
    console.log("Enviando al Backend:", reservationPayload);
    
    setReservationCode(Math.random().toString(36).substring(2, 14).toUpperCase());
    setBookingComplete(true);
  };

  const resetCheckout = () => {
    setBookingComplete(false);
    setSelectedRoom(null);
    setGuestName("");
    setGuestLastName("");
    setGuestEmail("");
    setCreditCard("");
  };

  return {
    state: { selectedRoom, guestName, guestLastName, guestEmail, creditCard, bookingComplete, reservationCode },
    actions: { handleSelectRoom, handleCancelBooking, handleAcceptBooking, resetCheckout, setGuestName, setGuestLastName, setGuestEmail, setCreditCard }
  };
};
