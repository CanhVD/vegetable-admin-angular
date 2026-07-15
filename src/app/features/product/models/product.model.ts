import { Category } from "./category.model";

export interface Product {
  description: string;
  id: number;
  name: string;
  quantity: number;
  origin: string;
  percent: number;
  price: number;
  status: boolean;
  unit: string;
  weight: number;
  image: string;
  shortDes: string;
  createdBy: string;
  createdDate: string;
  updatedBy: string;
  updatedDate: string;
  categoryList: Category[];
}
