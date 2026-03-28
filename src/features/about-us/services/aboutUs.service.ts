//import apiClient from "../../../shared/services/apiClient";
import type { AboutUs } from "../types/aboutUs.types";
import type { AboutUsGallery } from "../types/gallery.type";

export async function getAboutUs(): Promise<{ aboutUs: AboutUs, gallery: AboutUsGallery[] }> {
  //const aboutUs = await apiClient.get("/about-us");
  //const gallery = await apiClient.get("/about-us/gallery");

  const data: AboutUs = {
    id: "1",
    description: "The Caribbean Ocean Resort & Spa was born from the dream of creating a space where visitors could experience the essence of the Costa Rican Caribbean without sacrificing comfort and luxury. Founded in 2008 by a Costa Rican family passionate about sustainable tourism, we have grown to become one of the most renowned resorts in the Caribbean region. We offer 48 rooms distributed among beachfront villas and bungalows, a world-class spa, three themed restaurants, infinity pools, and direct access to a private beach. All our staff are local, trained to the highest standards of hospitality, and committed to providing personalized attention to each guest. We deeply believe in responsible tourism. Therefore, more than 80% of the products we use in our kitchen and spa come from local and organic suppliers, and we hold ICT Sustainable Tourism certification (Level 4)."
  };

  const gallery: AboutUsGallery[] = [
    {
      id: "1",
      image: "https://static.hosteltur.com/app/public/uploads/img/articles/2014/09/01/S_5b14f78cdbe07_shutterstock_hotelcaribe.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
    },
    {
      id: "2",
      image: "https://i.pinimg.com/736x/39/fa/28/39fa28f519c21814324d4053271ad668.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
    },
    {
      id: "3",
      image: "https://www.thehotelguru.com/_images/d7/a5/d7a52778f45626be485af17b0def2af1/s1654x900.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
    },
    {
      id: "4",
      image: "https://digital.ihg.com/is/image/ihg/independent-puerto-plata-8182279046-16x5-1?ts=1767990373913&dpr=off",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
    },
    {
      id: "5",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/a7/fc/e0/sunsol-isla-caribe.jpg?w=700&h=-1&s=1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
    },
    {
      id: "6",
      image: "https://www.margaritaycoche.com/images/gallery/196/grandes/vista_aerea_sunsol_isla_caribe_1.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
    },
    {
      id: "7",
      image: "https://q-xx.bstatic.com/xdata/images/hotel/max500/543592315.jpg?k=0e14f88a5dcf6a1ecef1cae5e0bd4ff67dc7ea356bceed899176be4fc32ce7cc&o=pg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
    },
    {
      id: "8",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/00/57/e2/pc-bungalow-suite.jpg?w=400&h=-1&s=1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
    }
  ];

  return { aboutUs: data, gallery };
}