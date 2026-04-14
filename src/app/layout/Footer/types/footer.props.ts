import type { FooterBrand, HotelEmail, HotelLocation, HotelNumber, HotelSocialMedia } from "./footer.types";

export interface FooterBrandProps{
    footerBrand : FooterBrand;
    socialMedia: HotelSocialMedia[];
}

export interface FooterContactProps{
    phoneNumbers : HotelNumber[];
    emails : HotelEmail[];
}

export interface FooterLocationProps{
    location : HotelLocation;
}