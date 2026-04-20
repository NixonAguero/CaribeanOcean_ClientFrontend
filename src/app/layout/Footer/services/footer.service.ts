//import apiClient from "../../../shared/services/apiClient";
import type { FooterBrand, HotelContact, HotelLocation, HotelContactInfo} from "../types/footer.types";

export async function getHotelContact(): Promise<HotelContactInfo>{

    //const aboutUs = await apiClient.get("/about-us");

    const hotelContact : HotelContact[] = [
        {type : "email", contact: "info@caribbean.cr"},
        {type : "email", contact: "reservas@caribbean.cr"},
        {type : "whatsapp", contact: "+506 8888-0001"},
        {type : "calls", contact: "+506 2222-1010"},
        {type : "facebook", contact: "https://www.facebook.com/caribbeanoceantours"},
        {type : "instagram", contact: "https://www.instagram.com/caribbean_ocean_tours/"},
        {type : "tiktok", contact: "https://www.tiktok.com/@whattodoincuracao"}
    ]

    const hotelLocation: HotelLocation = { 
        location: "The hotel is located fifty yards from Playa Cocles in the middle of the natural beauty of Puerto Viejo de Talamanca, Limón, Costa Rica.",
        url_location: "https://maps.app.goo.gl/f4LakXLQziZfjidq8"
    }

    const hotelContactInfo : HotelContactInfo = {
        contacts : hotelContact,
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