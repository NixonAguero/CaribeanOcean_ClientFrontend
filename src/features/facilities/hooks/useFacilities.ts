import { useEffect, useState } from "react";
import type { Facility } from "../types/facilities.types";
import { getFacility } from "../services/facilities.service";

export function useFacilities() {
  const [data, setData] = useState<Facility>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFacility({ numberOfItems: 3 })
    .then((res) => {
      setData(res);
      setLoading(false);
    });
  }, []);

  return { data, loading };
}
