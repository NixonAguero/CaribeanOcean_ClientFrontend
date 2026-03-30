import styles from '../styles/AboutUs.module.css'
import type { MainImageProps } from '../types/aboutUs.props';

export default function MainImage({image} : MainImageProps) {

    return(
        <img
            src={image.url}
            alt={image.description}
            loading='lazy'
            className={styles.galleryImage}
        />
    );

}