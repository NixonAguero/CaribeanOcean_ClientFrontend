import { useEffect, useState } from "react";
import { getAboutUs } from "../services/aboutUs.service";
import type { AboutUs } from "../types/aboutUs.types";
import type { AboutUsGallery } from "../types/AboutUsGallery";

export function useAboutUs() {
  
  const [data, setData] = useState<{ aboutUs: AboutUs, gallery: AboutUsGallery[] }>({
    aboutUs: {
      id: "",
      description: ""
    },
    gallery: []
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAboutUs().then((res) => {
      setData(res);
      setLoading(false);
    });
  }, []);

  return { data, loading };
}