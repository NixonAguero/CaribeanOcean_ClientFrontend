//import apiClient from "../../../shared/services/apiClient";
import type { Offer } from "../types/offer.type";

export async function getOffers(): Promise<Offer[]> {
  //const response = await apiClient.get("/offers");

  const offers: Offer[] = [
  {
    id: "off-001",
    name: "Early Bird Summer",
    description: "Book 3 months in advance and enjoy the sun at a special rate.",
    discount: 20,
    startDate: "2026-06-01",
    endDate: "2026-08-31",
    roomType: "Deluxe Suite",
    url_image: "https://i.pinimg.com/originals/da/39/ce/da39ceccbd966c17c74c016e311e1ec2.png"
  },
  {
    id: "off-002",
    name: "Romantic Getaway",
    description: "Special package for couples including a complimentary dinner.",
    discount: 15,
    startDate: "2026-02-10",
    endDate: "2026-02-20",
    roomType: "Honeymoon Suite",
    url_image: "https://images.mirai.com/INFOROOMS/100377986/B609SbTc69RrDyIlLD4w/B609SbTc69RrDyIlLD4w_large.jpg"
  },
  {
    id: "off-003",
    name: "Digital Nomad Week",
    description: "Extended stay discount perfect for remote work in paradise.",
    discount: 25,
    startDate: "2026-03-01",
    endDate: "2026-05-30",
    roomType: "Standard Studio",
    url_image: "https://cdn.forbes.com.mx/2021/12/Hoteles-de-lujo-tres-1-1024x682.jpg"
  },
  {
    id: "off-004",
    name: "Last Minute Weekend",
    description: "Escape this weekend with our best available price.",
    discount: 10,
    startDate: "2026-03-27",
    endDate: "2026-03-29",
    roomType: "Double Room",
    url_image: "https://media.ambito.com/adjuntos/239/imagenes/036/681/0036681023.jpg?0000-00-00-00-00-00"
  },
  {
    id: "off-005",
    name: "Family Adventure Pack",
    description: "Connected rooms with free breakfast for the whole family.",
    discount: 30,
    startDate: "2026-07-15",
    endDate: "2026-08-15",
    roomType: "Family Superior",
    url_image: "https://itexa.es/blog/wp-content/uploads/2023/11/colores-habitacion-portada.jpg"
  },
  {
    id: "off-006",
    name: "Business Executive",
    description: "Located near the financial district, ideal for short trips.",
    discount: 12,
    startDate: "2026-04-01",
    endDate: "2026-12-31",
    roomType: "Single Executive",
    url_image: "https://media.revistagq.com/photos/5ca5f072501e5472ac7c591d/master/w_1600%2Cc_limit/hotel_lujo_2934.jpg"
  },
  {
    id: "off-007",
    name: "Jungle Expedition",
    description: "Experience nature deeply with a wild seasonal discount.",
    discount: 18,
    startDate: "2026-09-01",
    endDate: "2026-11-30",
    roomType: "Eco-Bungalow",
    url_image: "https://www.moshy.es/wp-content/uploads/2025/08/Tipos-de-habitacion-de-hotel-1200x480.jpg"
  }
];

  return offers;
}