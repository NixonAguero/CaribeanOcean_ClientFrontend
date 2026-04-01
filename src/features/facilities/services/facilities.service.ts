import type { Facility, paginationParams  } from "../types/facilities.types";
import LuxurySuite from "../../../assets/facilities/LuxurySuite.jpg";
import InfinityPool from "../../../assets/facilities/InfinityPool.png";
import Spa from "../../../assets/facilities/Spa.png";
import Gourmet from "../../../assets/facilities/Gourmet.png";
import Gym from "../../../assets/facilities/Gym.png";

const facility: Facility = {
  title: "Facilities",
  description: "Caribbean Ocean offers a variety of facilities to ensure a comfortable and enjoyable stay for our guests. From our luxurious rooms to our state-of-the-art amenities, we strive to provide an unforgettable experience for all who visit us.",
  facilities: [
    {
      id: "1",
      name: "Luxury Suite",
      description: "Experience unparalleled comfort in our luxury suites, featuring modern amenities and stunning ocean views.",
      imageUrl: LuxurySuite,
      labels: ["Luxury", "Ocean View"]
    },
    {
      id: "2",
      name: "Infinity Pool",
      description: "Relax and unwind in our infinity pool, offering breathtaking views of the Caribbean Sea.",
      imageUrl: InfinityPool,
      labels: ["Relaxation", "Scenic Views"]
    },
    {
      id: "3",
      name: "Spa & Wellness",
      description: "Rejuvenate your body and mind at our award-winning spa, offering a range of treatments and wellness services.",
      imageUrl: Spa,
      labels: ["Wellness", "Relaxation"]
    },
    {
      id: "4",
      name: "Gourmet Dining",
      description: "Savor exquisite cuisine at our gourmet restaurant, where our chefs create culinary masterpieces using fresh, local ingredients.",
      imageUrl: Gourmet,
      labels: ["Cuisine", "Fine Dining"]
    },
    {
      id: "5",
      name: "Fitness Center",
      description: "Stay active during your stay with our fully equipped fitness center, featuring state-of-the-art equipment and personal training services.",
      imageUrl: Gym,
      labels: ["Fitness", "Health"]
    }
  ]
}

export async function getFacility(params: paginationParams): Promise<Facility> {
  let facilityData: Facility = facility;
  const startIndex = 0;
  const endIndex = startIndex + params.numberOfItems;
  const paginatedFacilities = facility.facilities.slice(startIndex, endIndex);
  facilityData.facilities = paginatedFacilities;
  return facilityData;
}
