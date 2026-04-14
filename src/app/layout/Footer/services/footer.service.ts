//import apiClient from "../../../shared/services/apiClient";
import type { FooterBrand, HotelContactInfo, HotelEmail, HotelLocation, HotelNumber, HotelSocialMedia } from "../types/footer.types";


export async function getHotelContact(): Promise<HotelContactInfo>{

    //const aboutUs = await apiClient.get("/about-us");

    const hotelEmails: HotelEmail[] = [
        { email: "reservations@hotelcaribbean.com" },
        { email: "contact@hotelcaribbean.com" }
    ];

    const phoneNumbers: HotelNumber[] = [
        { typeContact: "calls", prefix: "+1 (305)", phoneNumber: "853 8700" },
        { typeContact: "calls", prefix: "+506", phoneNumber: "2640 0404" },
        { typeContact: "whatsapp", prefix: "+506", phoneNumber: "8550 0444" }
    ]

    const hotelSocialMedia: HotelSocialMedia[] = [
        { socialMedia: "facebook", link: "https://www.facebook.com/caribbeanoceantours" },
        { socialMedia: "instagram", link: "https://www.instagram.com/caribbean_ocean_tours/" },
        { socialMedia: "tiktok", link: "https://www.tiktok.com/@whattodoincuracao" }
    ]

    const hotelLocation: HotelLocation = { 
        location: "The hotel is located fifty yards from Playa Cocles in the middle of the natural beauty of Puerto Viejo de Talamanca, Limón, Costa Rica.",
        url_location: "https://maps.app.goo.gl/f4LakXLQziZfjidq8"
    }

    const hotelContactInfo : HotelContactInfo = {
        emails : hotelEmails,
        location : hotelLocation,
        phoneNumbers : phoneNumbers,
        socialMedia : hotelSocialMedia
    }

    return hotelContactInfo;
}

export async function getFooterBrand(): Promise<FooterBrand> {
    //const aboutUs = await apiClient.get("/about-us");

    const data: FooterBrand = {
        title: "Caribbean Ocean",
        subtitle: "Resort & Spa",
        description: "Where the jungle meets the sea. Discover paradise on the shores of Puerto Viejo de Talamanca, Costa Rica.",
    };

    return data;
}