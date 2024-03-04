import { Category } from '../class/category';
import { Images } from '../class/images';

export class ProductInterface {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  brand: string;
  images: Images[];
  review: string;
  available: boolean;
  category: Category[];
}
