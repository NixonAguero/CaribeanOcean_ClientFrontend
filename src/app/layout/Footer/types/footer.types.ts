export interface FooterBrand {
    title: string;
    subtitle: string;
    description: string;
}

export interface HotelNumber {
    typeContact: string;
    prefix: string;
    phoneNumber: string;
}

export interface HotelEmail {
    email: string;
}

export interface HotelSocialMedia {
    socialMedia: string;
    link: string;
}

export interface HotelLocation {
    location: string;
    url_location : string;
}

export interface HotelContactInfo {
    phoneNumbers: HotelNumber[];
    emails: HotelEmail[];
    socialMedia: HotelSocialMedia[];
    location: HotelLocation;
}