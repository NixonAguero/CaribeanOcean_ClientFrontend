//import apiClient from "../../../shared/services/apiClient";
import type { AboutUs } from "../types/aboutUs.types";

export async function getAboutUs(): Promise<AboutUs> {
  //const aboutUs = await apiClient.get("/about-us");

  const data: AboutUs = {
    id: "1",
    description: "The Caribbean Ocean Resort & Spa was born from the dream of creating a space where visitors could experience the essence of the Costa Rican Caribbean without sacrificing comfort and luxury. Founded in 2008 by a Costa Rican family passionate about sustainable tourism, we have grown to become one of the most renowned resorts in the Caribbean region. We offer 48 rooms distributed among beachfront villas and bungalows, a world-class spa, three themed restaurants, infinity pools, and direct access to a private beach. All our staff are local, trained to the highest standards of hospitality, and committed to providing personalized attention to each guest. We deeply believe in responsible tourism. Therefore, more than 80% of the products we use in our kitchen and spa come from local and organic suppliers, and we hold ICT Sustainable Tourism certification (Level 4).",
  };

  return data;
}