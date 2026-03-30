import AboutUs from "../about-us/components/AboutUs";
import Hero from "../hero/components/Hero";
import { Footer } from "../../app/layout/Footer/Footer"

export const HomePage = () => {
  return (
    <main>
      <Hero />
      <AboutUs />
      <Footer></Footer>
    </main>
  );
};