//import apiClient from "../../../shared/services/apiClient";
import type { Location } from "../types/location.types";

const locationData: Location = {
  title: "ARRIVES AT CARIBBEAN OCEAN",
  description: "Embark on a seamless journey to paradise. Whether you are traveling by land or air, arriving at our sanctuary is designed to be effortless and secure.",
  mapsLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1966.716568333218!2d-82.72704476032715!3d9.643981399999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa64533a1c941d7%3A0x4c26f09334cfd1b2!2sPlaya%20Chasma!5e0!3m2!1ses-419!2scr!4v1774936213017!5m2!1ses-419!2scr"
}

export async function getLocation(): Promise<Location> {
  const response = locationData;
  return response;
  //const response = await apiClient.get(`/location/`);
  //return response.data;
}
