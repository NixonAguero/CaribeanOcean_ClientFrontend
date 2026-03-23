import { useEffect, useState } from "react";
import { getOffers } from "../services/offers.service";

export function useOffers() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getOffers().then((res) => {
      setData(res);
      setLoading(false);
    });
  }, []);

  return { data, loading };
}