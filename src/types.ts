export type Screen = 'browse' | 'details' | 'list' | 'profile';

export interface Vehicle {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  currency: string;
  fuelType: string;
  transmission: string;
  mileage?: string;
  capacity?: string;
  image: string;
  status: 'available' | 'booked';
  rating?: number;
  reviews?: number;
  location: string;
  description?: string;
  features?: string[];
}
