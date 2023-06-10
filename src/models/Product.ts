import { Order } from './';

interface Product {
  id: number;
  serialNumber: number;
  isNew: boolean;
  photo: string;
  title: string;
  specification: string;
  createdAt: string;
  type: ProductType;
  order: Order;
  price: Price[];
  guarantee: Guarantee;
}

export default Product;

export interface Guarantee {
  id: number;
  start: string;
  end: string;
}

export interface Price {
  id: number;
  value: number;
  symbol: string;
  isDefault: boolean;
}

export interface ProductType {
  id: number;
  name: string;
}
