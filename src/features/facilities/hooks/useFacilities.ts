import { useEffect, useState } from "react";
import { getFacilities } from "../services/facilities.service";

export function useFacilities() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFacilities().then((res) => {
      setData(res);
      setLoading(false);
    });
  }, []);

  return { data, loading };
}