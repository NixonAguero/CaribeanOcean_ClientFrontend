export interface GalleryImage {
  id: string;
  url: string;
  description: string;
}

export type Gallery = {
  images: GalleryImage[];
}