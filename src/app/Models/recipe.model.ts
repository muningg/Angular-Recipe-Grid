export interface Recipe {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
  ingredients: string[];
  isTrending?: boolean;
  reviews?: number;
}