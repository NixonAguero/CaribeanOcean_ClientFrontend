import { useState } from "react";
import type { Gallery } from "../types/aboutUs.types";

export function useGallery ({images} : Gallery) {

    const [selectedImageId, setSelectedImageId] = useState<string | null>();
    const mainImage = images.find(img => selectedImageId === img.id) ?? images[0];
    const thumbnails = images.filter(img => selectedImageId != img.id)

    return {mainImage, thumbnails, setSelectedImageId}
}