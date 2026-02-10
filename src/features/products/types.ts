export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  sold: number;
  badge?: string;
  image: string;
}

