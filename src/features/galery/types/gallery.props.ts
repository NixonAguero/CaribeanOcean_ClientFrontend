import type { Gallery, GalleryImage } from "./gallery.types";

export interface GalleryProps {
  gallery: Gallery;
}

export interface MainImageProps{
  image : GalleryImage;
}

export interface ThumbnailsProps{
  images : GalleryImage[];
  onSelect: (id:string) => void;
}

export interface AboutUsProps{
  description: string
}