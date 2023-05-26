export interface Hotel {
    id: number;
    name: string;
    price: string;
    rating: number;
    reviews: number;
    stars: number;
    latitude: number;
    longitude: number;
    photos?: string[];
}