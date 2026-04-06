import type { FacilitiesSection, paginationParams  } from "../types/facilities.types";
import LuxurySuite from "../../../assets/facilities/LuxurySuite.jpg";
import InfinityPool from "../../../assets/facilities/InfinityPool.png";
import Spa from "../../../assets/facilities/Spa.png";
import Gourmet from "../../../assets/facilities/Gourmet.png";
import Gym from "../../../assets/facilities/Gym.png";

const facility: FacilitiesSection = {
  title: "Facilities",
  description: "At Caribbean Ocean, we are dedicated to providing a sanctuary of comfort and sophistication. Our facilities have been meticulously designed to blend modern luxury with the natural beauty of our surroundings, ensuring that every moment of your stay is as enriching as it is unforgettable.",
  facilities: [
    {
      id: "1",
      name: "Luxury Suite",
      description: "Discover a new standard of elegance in our premier suites. Each space is a masterpiece of design, featuring high-end furnishings, a private terrace, and expansive windows that frame the turquoise horizon, offering the perfect backdrop for your morning coffee or a sunset toast.",
      imageUrl: LuxurySuite,
      labels: ["Relaxation", "Ocean View"]
    },
    {
      id: "2",
      name: "Infinity Pool",
      description: "Immerse yourself in serenity where the water meets the sky. Our stunning infinity pool creates the illusion of merging directly into the Caribbean Sea, providing a tranquil oasis to soak up the sun or enjoy a refreshing swim while admiring the most breathtaking panoramic views of the coast.",
      imageUrl: InfinityPool,
      labels: ["Relaxation", "Ocean View"]
    },
    {
      id: "3",
      name: "Spa & Wellness",
      description: "Step into a world of peace at our award-winning sanctuary. Our expert therapists utilize ancient techniques and organic local ingredients to provide personalized treatments, from deep-tissue massages to revitalizing facials, all designed to restore balance to your body, mind, and spirit.",
      imageUrl: Spa,
      labels: ["Relaxation", "Ocean View", "Wellness"]
    },
    {
      id: "4",
      name: "Gourmet Dining",
      description: "Embark on a culinary journey that celebrates the vibrant flavors of the tropics. Our world-class chefs transform fresh, locally-sourced ingredients into artistic masterpieces, perfectly paired with an extensive wine cellar and served in an atmosphere of refined coastal sophistication.",
      imageUrl: Gourmet,
      labels: ["Cuisine", "Ocean View", "Drinks"]
    },
    {
      id: "5",
      name: "Fitness Center",
      description: "Maintain your wellness routine in our state-of-the-art training facility. Equipped with the latest cardiovascular and strength-training technology, our fitness center also offers yoga sessions and personal coaching, ensuring you stay energized and inspired throughout your Caribbean escape.",
      imageUrl: Gym,
      labels: ["Fitness", "Health", "Wellness"]
    }
  ]
}

export async function getFacility(params: paginationParams): Promise<FacilitiesSection> {
  const startIndex = 0;
  const endIndex = startIndex + params.numberOfItems;

  return {
    ...facility, // copia del objeto
    facilities: facility.facilities.slice(startIndex, endIndex) // nueva lista
  };
}
