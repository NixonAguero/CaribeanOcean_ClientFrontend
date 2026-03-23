import { useEffect, useState } from "react";
import { getBooking } from "../services/booking.service";

export function useBooking() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBooking().then((res) => {
      setData(res);
      setLoading(false);
    });
  }, []);

  return { data, loading };
}