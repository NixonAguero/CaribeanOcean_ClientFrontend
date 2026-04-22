import apiClient from "../../../../shared/services/apiClient";
import type { FooterBrand, HotelContact, HotelLocation, HotelContactInfo} from "../types/footer.types";

export async function getHotelContact(): Promise<HotelContactInfo>{

    const { data: hotelContacts } = await apiClient.get<HotelContact[]>("/ContactUs");
    
    const hotelLocation: HotelLocation = { 
        location: "The hotel is located fifty yards from Playa Cocles in the middle of the natural beauty of Puerto Viejo de Talamanca, Limón, Costa Rica.",
        url_location: "https://maps.app.goo.gl/f4LakXLQziZfjidq8"
    }

    const hotelContactInfo : HotelContactInfo = {       
        contacts : hotelContacts,
        location : hotelLocation
    }

    return hotelContactInfo;
}

export async function getFooterBrand(): Promise<FooterBrand> {

    const data: FooterBrand = {
        title: "Caribbean Ocean",
        subtitle: "Resort & Spa",
        description: "Where the jungle meets the sea. Discover paradise on the shores of Puerto Viejo de Talamanca, Costa Rica.",
    };

    return data;
}