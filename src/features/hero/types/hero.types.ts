export interface Hero {
  id: string;
  title: string;
  description: string;
  images: HeroImage[];
}

export type HeroImage = {
  url : string
}