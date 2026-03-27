import { useBooking } from "./hooks/useBooking";
import { Booking } from "./components/Booking";

export const BookingPage = () => {
  const {loading} = useBooking();
  if (loading) return <p>Cargando...</p>;
  return (
    <main>
      <h1>Booking</h1>
      <Booking/>
    </main>
  );
};