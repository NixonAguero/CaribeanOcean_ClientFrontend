export interface GalleryImage {
  id: string;
  url: string;
  description: string;
}

export type Gallery = {
  images: GalleryImage[];
}

export interface AboutUs {
  id: string;
  description: string;
  gallery: {images : GalleryImage[]};
}