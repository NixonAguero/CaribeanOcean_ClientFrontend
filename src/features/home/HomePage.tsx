import AboutUs from "../about-us/components/AboutUs";
import Hero from "../hero/components/Hero";
import Locations from "../locations/components/Locations";

export const HomePage = () => {
  return (
    <main>
      <Hero />
      <AboutUs />
      <Locations />
    </main>
  );
};