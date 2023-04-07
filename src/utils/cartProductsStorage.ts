import { IPizzaProductObj } from "../helpres/pizzaTypes";


export function getCartProductsArr(): Array<IPizzaProductObj> {
  const data = localStorage.getItem('CART_PRODUCTS');
  return data ? JSON.parse(data) : [];
}


export function clearCartProductsArr() {
  localStorage.removeItem('CART_PRODUCTS');
}