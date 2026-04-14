import { useState, useEffect } from "react";
import { getFooterBrand, getHotelContact} from "../services/footer.service";
import type { FooterBrand, HotelContactInfo} from "../types/footer.types";

export function useFooter() {

    const [footerBrand, setFooterBrand] = useState<FooterBrand>();
    const [hotelContactInfo, setHotelContactInfo] = useState<HotelContactInfo>();

    const [error, setError] = useState<Error | null>();

    useEffect(() => {
        getFooterBrand().then((resFooterBrand) => setFooterBrand(resFooterBrand)).catch((error) => setError(error))
        getHotelContact().then((resHotelContactInfo) => setHotelContactInfo(resHotelContactInfo)).catch((error) => setError(error))
    }, []);

    const isLoading = !footerBrand || !hotelContactInfo;

    return { footerBrand, hotelContactInfo, error, isLoading };
}