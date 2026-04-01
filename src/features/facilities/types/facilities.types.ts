export interface Facility {
  title: string;
  description: string;
  facilities:
  {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    labels: string[];
  }[];
}

export interface paginationParams {
  numberOfItems: number;
}

