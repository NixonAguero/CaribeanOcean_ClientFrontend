import { useEffect, useState } from "react";
import { getAboutUs } from "../services/aboutUs.service";

export function useAboutUs() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAboutUs().then((res) => {
      setData(res);
      setLoading(false);
    });
  }, []);

  return { data, loading };
}