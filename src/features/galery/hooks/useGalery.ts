import { useEffect, useState } from "react";
import { getGalery } from "../services/galery.service";

export function useGalery() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getGalery().then((res) => {
      setData(res);
      setLoading(false);
    });
  }, []);

  return { data, loading };
}