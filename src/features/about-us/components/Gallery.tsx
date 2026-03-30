import type { GalleryProps } from "../types/aboutUs.props";
import styles from "../styles/AboutUs.module.css";
import MainImage from "./MainImage";
import Thumbnails from "./Thumbnails";
import { useGallery } from "../hooks/useGallery";

export default function Gallery( { gallery }: GalleryProps ) {

    if (gallery.images.length === 0) return null;
    const {mainImage, thumbnails, setSelectedImageId} = useGallery(gallery);

    return (
        <div className={styles.aboutUsGallery}>
            <MainImage image = {mainImage}/>
            <Thumbnails images={thumbnails} onSelect={setSelectedImageId}/>
        </div>
    );
}