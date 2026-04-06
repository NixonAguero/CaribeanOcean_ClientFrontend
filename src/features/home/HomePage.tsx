import AboutUs from "../about-us/components/AboutUs";
import Hero from "../hero/components/Hero";
import { Footer } from "../../app/layout/Footer/Footer"
import {Gallery} from "../about-us/components/Gallery";
import { Facilities } from "../facilities/components/Facilities";
import Locations from "../locations/components/Locations";

export const HomePage = () => {
  return (
    <main>
      <div id="home"> <Hero /> </div>
      <div id="about"> <AboutUs /> </div>
      <div id="gallery"> <Gallery /> </div>
      <div id="facilities"> <Facilities /> </div>
      <div id="location"> <Locations /> </div>
    </main>
  );
};