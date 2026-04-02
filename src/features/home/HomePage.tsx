import AboutUs from "../about-us/components/AboutUs";
import Gallery from "../galery/components/Gallery";
import Facilities from "../facilities/components/Facilities";
import Hero from "../hero/components/Hero";
import Locations from "../locations/components/Locations";

export const HomePage = () => {
  return (
    <main>
      <Hero />
      <AboutUs />
      <Gallery gallery = {data.gallery} />
      <Facilities />
      <Locations />
    </main>
  );
};