import type { AboutUsProps } from "../types/aboutUs.props";
import styles from '../styles/AboutUs.module.css'

export default function AboutUsText({description} : AboutUsProps){
    return(
        <div className={styles.textColumn}>
        <h1 className={styles.aboutTitle}>ABOUT US</h1>
        <div className="decorative-line"></div>
        <span className="text-hero-subtitle">The Caribbean Ocean Resort & Spa</span>
        <p className={styles.description}>{description}</p>
      </div>
    );
}