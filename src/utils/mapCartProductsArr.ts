import orderBy from 'lodash.orderby';
import { IPizzaProductObj } from '../helpres/pizzaTypes';





export function mapCartProductsArr(products: Array<IPizzaProductObj>) {
  const newProducts: Array<IPizzaProductObj> = [];

  for (const productObj of products) {
    const siblingObj = newProducts.find(obj => 
      obj.id === productObj.id && obj.type === productObj.type && obj.size === productObj.size
    );

    if (siblingObj && siblingObj.count) {
      siblingObj.count += 1;
    } 
    else newProducts.push({...productObj, count: 1});
  }
  return orderBy(newProducts, ['title', 'size', 'type'], ['asc', 'asc', 'asc']);
}
