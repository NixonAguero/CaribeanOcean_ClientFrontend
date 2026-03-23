import { useEffect, useState } from "react";
import { getRooms } from "../services/rooms.service";

export function useRooms() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRooms().then((res) => {
      setData(res);
      setLoading(false);
    });
  }, []);

  return { data, loading };
}