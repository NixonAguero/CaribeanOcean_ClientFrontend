import { useEffect, useState } from "react";
import { getGalleryImages } from "../services/galery.service";
import type { GalleryImage } from "../types/gallery.types";

export function useGallery () {

    const [imgs, setImgs] = useState<GalleryImage[]>();
    const [selectedImageId, setSelectedImageId] = useState<string | null>();

    const mainImage = imgs?.find(img => selectedImageId === img.id) ?? imgs?.[0];
    const thumbnails = imgs?.filter(img => selectedImageId != img.id)

    useEffect(() =>{
        getGalleryImages()
        .then((res) => setImgs(res))
        .catch((error) => console.log(error))
    }, [selectedImageId]);

    return {imgs, mainImage, thumbnails, setSelectedImageId}
}