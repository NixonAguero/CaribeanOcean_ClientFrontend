import type { AboutUsGallery } from "../types/AboutUsGallery";
import React, { useState } from 'react';

interface GalleryProps {
    gallery: AboutUsGallery[];
    styles: Record<string, string>;
}

export const Gallery: React.FC<GalleryProps> = ({ gallery, styles }) => {

    const [selectedImageId, setSelectedImageId] = useState<string | null>(null);

    const mainImage = gallery.find(img => img.id === selectedImageId) || gallery[0];
    const thumbnails = gallery.filter(img => img.id !== mainImage?.id);

    if (gallery.length === 0) return null;

    return (
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
    );
}