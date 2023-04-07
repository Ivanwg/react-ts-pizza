import orderBy from 'lodash.orderby';
import { IPizzaProductObj } from '../helpres/pizzaTypes';

interface IProps {
  arr: Array<IPizzaProductObj>;
  categoryId: number;
  sortId: number;
}


export function mapPizzasByQuery({arr, categoryId, sortId}: IProps) {
  
  if (arr && arr.length) {
    const filtered = categoryId === 0 ? arr : arr.filter(obj => {
      return obj.category === categoryId;
    });
    const ordered = orderBy(filtered, [recognizeFieldById(sortId)], [
      sortId === 0 ? 'desc' : 'asc'
    ]);
    return ordered;

  }
  return arr;
}

function recognizeFieldById(id: number) {
  let field;
  if (id === 0) {
    field = 'rating';
  } else if (id === 1) {
    field = 'price';
  } else if (id === 2) {
    field = 'title';
  } else {
    field = 'rating';
  }
  return field;
}