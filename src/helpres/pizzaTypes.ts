export interface IPizzaObj {
    id: number;
    imageUrl: string;
    title: string;
    types: Array<number>;
    sizes: Array<number>;
    price: number;
    category: number;
    rating?: number;
}



export interface IPizzaProductObj {
  id: number;
  imageUrl: string;
  title: string;
  type: string;
  size: number;
  price: number;
  category?: number;
  rating?: number;
  count?: number;
}

export interface IProductRemoveProps {
  id: number;
  type: string;
  size: number;
}