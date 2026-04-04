//import apiClient from "../../../shared/services/apiClient";
import type { GalleryImage } from "../types/gallery.types";

export async function getGalleryImages(): Promise<GalleryImage[]> {
  //const aboutUs = await apiClient.get("/about-us");

  const data: GalleryImage[] =
    [
      {
        id: "1",
        url: "https://static.hosteltur.com/app/public/uploads/img/articles/2014/09/01/S_5b14f78cdbe07_shutterstock_hotelcaribe.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
      },
      {
        id: "2",
        url: "https://i.pinimg.com/736x/39/fa/28/39fa28f519c21814324d4053271ad668.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
      },
      {
        id: "3",
        url: "https://www.thehotelguru.com/_images/d7/a5/d7a52778f45626be485af17b0def2af1/s1654x900.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
      },
      {
        id: "4",
        url: "https://digital.ihg.com/is/image/ihg/independent-puerto-plata-8182279046-16x5-1?ts=1767990373913&dpr=off",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
      },
      {
        id: "5",
        url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/a7/fc/e0/sunsol-isla-caribe.jpg?w=700&h=-1&s=1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
      },
      {
        id: "6",
        url: "https://i0.wp.com/foodandpleasure.com/wp-content/uploads/2021/04/hoteles-en-playa-del-carmen-magicblue.jpeg?fit=1280%2C855&ssl=1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
      },
      {
        id: "7",
        url: "https://q-xx.bstatic.com/xdata/images/hotel/max500/543592315.jpg?k=0e14f88a5dcf6a1ecef1cae5e0bd4ff67dc7ea356bceed899176be4fc32ce7cc&o=pg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
      },
      {
        id: "8",
        url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/00/57/e2/pc-bungalow-suite.jpg?w=400&h=-1&s=1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
      }
    ]

  return data;
}