import "../styles/Footer.css";
import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import FooterLocation from "./FooterLocation";
import FooterContact from "./FooterContact";
import FooterBottom from "./FooterBottom";
import { useFooter } from "../hooks/useFooter";

export default function Footer() {
  
  const {footerBrand, hotelContactInfo, error, isLoading} = useFooter();
  if (error) return <div className="error">Something went wrong. Please try again.</div>;
  if (isLoading || !footerBrand || !hotelContactInfo) return null;

  return (
    <footer className="footer" id="footer">

      <div className="footer-accent" />

      <div className="footer-container">
        <FooterBrand footerBrand={footerBrand} socialMedia={hotelContactInfo.socialMedia}/>
        <FooterLinks />
        <FooterLocation location={hotelContactInfo.location}/>
        <FooterContact emails={hotelContactInfo.emails} phoneNumbers={hotelContactInfo.phoneNumbers} />
      </div>

      <FooterBottom />

    </footer>
  );
}