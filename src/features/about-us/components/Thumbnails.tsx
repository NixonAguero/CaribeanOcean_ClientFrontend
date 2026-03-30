import styles from '../styles/AboutUs.module.css'
import type { ThumbnailsProps } from '../types/aboutUs.props'

export default function Thumbnails ({images, onSelect} : ThumbnailsProps){
    return (

        <>
            {images.map(img => 
                <img 
                    src={img.url}
                    alt={img.description}
                    loading='lazy'
                    className={`${styles.galleryImage} ${styles.galleryThumb}`}
                    onClick={() => onSelect(img.id)}
                />
            )}
        </>

    );
}