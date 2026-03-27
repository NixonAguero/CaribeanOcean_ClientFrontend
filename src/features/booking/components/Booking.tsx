
import styles from "./Booking.module.css";
import { BookingSearchForm } from "./BookingSearchForm";
import { CheckoutForm } from "./CheckoutForm";
import { BookingSuccess } from "./BookingSuccess";
import { useBookingSearch } from "../hooks/useBookingSearch";
import { useCheckout } from "../hooks/useCheckout";
import { BookingSearchResults } from "./BookingSearchResults";
export const Booking = () => {
  const search = useBookingSearch();
  const checkout = useCheckout();

  const handleFullReset = () => {
    checkout.actions.resetCheckout();
    search.actions.resetSearch();
  };
  // --- 1. RENDER DE ÉXITO (Paso 4) ---
  if (checkout.state.bookingComplete) {
    return (
      <BookingSuccess
        guestName={checkout.state.guestName}
        guestLastName={checkout.state.guestLastName}
        roomName={checkout.state.selectedRoom?.name || ""}
        reservationCode={checkout.state.reservationCode}
        onClose={handleFullReset}
      />
    );
  }
  // --- 2. RENDER DE CHECKOUT DE DATOS (Paso 3) ---
  if (checkout.state.selectedRoom) {
    return (
      <CheckoutForm
        selectedRoom={checkout.state.selectedRoom}
        guestName={checkout.state.guestName} setGuestName={checkout.actions.setGuestName}
        guestLastName={checkout.state.guestLastName} setGuestLastName={checkout.actions.setGuestLastName}
        guestEmail={checkout.state.guestEmail} setGuestEmail={checkout.actions.setGuestEmail}
        creditCard={checkout.state.creditCard} setCreditCard={checkout.actions.setCreditCard}

        onAccept={(e) => checkout.actions.handleAcceptBooking(e, search.state.startDate, search.state.endDate)}
        onCancel={checkout.actions.handleCancelBooking}
      />
    );
  }
  // --- 3. RENDER DE BUSCADOR Y RESULTADOS (Paso 1 y 2) ---
  return (
    <div className={styles.pageContainer}>
      <BookingSearchForm
        startDate={search.state.startDate} setStartDate={search.actions.setStartDate}
        endDate={search.state.endDate} setEndDate={search.actions.setEndDate}
        roomType={search.state.roomType} setRoomType={search.actions.setRoomType}
        onSearch={search.actions.handleSearch}
        hasSearched={search.state.hasSearched}
      />
      <BookingSearchResults
        hasSearched={search.state.hasSearched}
        isRecommendation={search.state.isRecommendation}
        availableRooms={search.state.availableRooms}
        handleSelectRoom={checkout.actions.handleSelectRoom}
      />
    </div>
  );
};
