import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import type { HotelSocialMedia } from "../types/footer.types";

export default function FooterSocialIcons({ socialMedia }: { socialMedia: HotelSocialMedia[] }) {
  return (
    <div className="footer-social">
      {socialMedia.map((media) => (
        <a 
          href={media.link} 
          aria-label={media.socialMedia} 
          className="footer-social-icon"
          target="_blank"
        >
          {media.socialMedia === "facebook" && <FaFacebookF />}
          {media.socialMedia === "instagram" && <FaInstagram />}
          {media.socialMedia === "tiktok" && <FaTiktok />}
        </a>
      ))}
    </div>
  );
}