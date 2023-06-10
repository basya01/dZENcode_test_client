import { Product } from './';

interface Order {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  products?: Product[];
}

export default Order;
