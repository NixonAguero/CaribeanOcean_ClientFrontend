import AboutUs from "../about-us/components/AboutUs";
import Facilities from "../facilities/components/Facilities";
import Hero from "../hero/components/Hero";
import Locations from "../locations/components/Locations";

export const HomePage = () => {
  return (
    <main>
      <Hero />
      <AboutUs />
      <Facilities />
      <Locations />
    </main>
  );
};