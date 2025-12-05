export interface phoneListInterface {
    id: string,
    brand: string,
    description: string,
    discountPercentage: number,
    price: number,
    images: string,
    rating: number,
    thumbnail: string,
    title: string,
    warrantyInformation: string
}

export interface weatherInterface {
  name?: string;
  message: string;
  main?: {
    feels_like?: number;
    grnd_level?: number;
    humidity?: number;
    pressure?: number;
    sea_level?: number;
    temp?: number;
    temp_max?: number;
    temp_min?: number;
  };
  sys?: {
    country?: string;
    sunrise?: number;
    id?: number;
    sunset?: number;
  };
}