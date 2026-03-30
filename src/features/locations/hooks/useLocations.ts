import { useEffect, useState } from "react";
import { getLocation } from "../services/locations.service";

export function useLocations() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getLocation().then((res) => {
      setData(res);
      setLoading(false);
    });
  }, []);

  return { data, loading };
}