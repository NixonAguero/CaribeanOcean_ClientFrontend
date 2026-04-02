export interface Facility {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  labels: string[];
}

export interface FacilitiesSection {
  title: string;
  description: string;
  facilities: Facility[];
}

export interface paginationParams {
  numberOfItems: number;
}

