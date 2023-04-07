import { IPizzaProductObj } from "../helpres/pizzaTypes";



export function calcTotalPrice(products: Array<IPizzaProductObj>) {
  return products.reduce((sum, obj) => {
    return sum + obj.price;
  }, 0);
}