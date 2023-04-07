import axios from "axios";
import { IPizzaObj } from "../helpres/pizzaTypes";
import { mapPizzasByQuery } from "./mapPizzasByQuery";


interface IPizzaProps {
  categoryId: number;
  sortId: number;
}


export function getPizzasArr({categoryId, sortId}: IPizzaProps): Promise<Array<IPizzaObj>> {
  const KEY = 'PIZZAS';
  return new Promise(resolve => {
    const saved = sessionStorage.getItem(KEY) as string;
    const initial = JSON.parse(saved);
    if (initial && initial.length) {
      resolve(mapPizzasByQuery({arr: initial, categoryId, sortId}));
    } 
    else {
      axios.get('https://6412c9dbb1ea744303191fed.mockapi.io/items').then(res => {
        sessionStorage.setItem(KEY, JSON.stringify(res.data));
        resolve(mapPizzasByQuery({arr: res.data, categoryId, sortId}));
      }).catch(err => []);
    }
  });
}