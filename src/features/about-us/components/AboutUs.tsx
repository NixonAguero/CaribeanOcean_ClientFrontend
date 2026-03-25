import React, { useState } from 'react';
import styles from "./AboutUs.module.css";
import { useAboutUs } from "../hooks/useAboutUs";

export const AboutUs: React.FC = () => {    
  const { data, loading } = useAboutUs();
  const [selectedImageId, setSelectedImageId] = useState<string | null>(null);

  if (loading || !data) {
    return <div className={styles.loading}>Loading...</div>;
  }

  const mainImage = data.gallery.find(img => img.id === selectedImageId) || data.gallery[0];
  const thumbnails = data.gallery.filter(img => img.id !== mainImage?.id);

  return (
    <section className={styles.aboutSection}>
      <div className={styles.textColumn}>
        <h1 className={styles.title}>ABOUT US</h1>
        <div className="decorative-line"></div>
        <span className="text-hero-subtitle">The Caribbean Ocean Resort & Spa</span>
        <p className={styles.description}>{data.aboutUs.description}</p>
      </div>

      {data.gallery.length > 0 && (
        <div className={styles.aboutUsGallery}>
          <img 
            src={mainImage.image} 
            alt={mainImage.description} 
            className={styles.galleryImage} 
          />
          {thumbnails.map((img) => (
            <img 
              src={img.image} 
              alt={img.description} 
              key={img.id} 
              className={`${styles.galleryImage} ${styles.galleryThumb}`}
              onClick={() => setSelectedImageId(img.id)}
            />
          ))}
        </div>
      )}
    </section>
  );
};