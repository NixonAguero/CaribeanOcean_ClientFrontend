//import apiClient from "../../../shared/services/apiClient";
import type { Location } from "../types/location.types";

const locationData: Location = {
  title: "ARRIVES AT CARIBBEAN OCEAN",
  subtitle: "Arrive at our facilities easily and safely",
  mapsLocation: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d983.3346018633744!2d-82.73978973046769!3d9.652098321522729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwMzknMDcuNiJOIDgywrA0NCcyMC45Ilc!5e0!3m2!1ses-419!2scr!4v1774907383335!5m2!1ses-419!2scr"
}

export async function getLocation(): Promise<Location> {
  const response = locationData;
  return response;
  //const response = await apiClient.get(`/location/`);
  //return response.data;
}
