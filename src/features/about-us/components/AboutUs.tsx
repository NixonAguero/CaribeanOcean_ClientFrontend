import React from 'react';
import styles from "../styles/AboutUs.module.css";
import { useAboutUs } from "../hooks/useAboutUs";
import { Gallery } from "./Gallery";

export const AboutUs: React.FC = () => {    
  const { data, loading } = useAboutUs();

  if (loading || !data) {
    return <div className={styles.loading}>The Caribbean Ocean Resort & Spa</div>;
  }

  return (
    <section className={styles.aboutSection}>
      <div className={styles.textColumn}>
        <h1 className={styles.title}>ABOUT US</h1>
        <div className="decorative-line"></div>
        <span className="text-hero-subtitle">The Caribbean Ocean Resort & Spa</span>
        <p className={styles.description}>{data.aboutUs.description}</p>
      </div>

      <Gallery gallery={data.gallery} styles={styles} />
      
    </section>
  );
};