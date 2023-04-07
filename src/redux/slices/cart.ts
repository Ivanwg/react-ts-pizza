import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IPizzaProductObj, IProductRemoveProps } from '../../helpres/pizzaTypes';
import { calcTotalPrice } from '../../utils/calcTotalPrice';
import { clearCartProductsArr, getCartProductsArr } from '../../utils/cartProductsStorage';

interface ICartState {
  totalPrice: number,
  products: Array<IPizzaProductObj>,
}

const storageProducts = getCartProductsArr();

const initialState: ICartState = {
  totalPrice: calcTotalPrice(storageProducts),
  products: storageProducts,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductObj(state, action: PayloadAction<IPizzaProductObj>) {
      state.products.push(action.payload);
      state.totalPrice = calcTotalPrice(state.products);
    },
    minusProductObj(state, action: PayloadAction<IProductRemoveProps>) {
      const redundantIndex = state.products.findIndex(obj => 
        obj.id === action.payload.id && 
        obj.type === action.payload.type && 
        obj.size === action.payload.size
      );
      state.products = state.products.filter((obj, index) => index !== redundantIndex);
      state.totalPrice = calcTotalPrice(state.products);
    },
    removeProductObj(state, action: PayloadAction<IProductRemoveProps>) {
      state.products = state.products.filter(obj => 
        !(obj.id === action.payload.id && 
        obj.type === action.payload.type && 
        obj.size === action.payload.size)
      );
      state.totalPrice = calcTotalPrice(state.products);
    },
    clearProducts(state) {
      state.products = [];
      state.totalPrice = 0;
      clearCartProductsArr();
    },
  },
})


export const { addProductObj, removeProductObj, clearProducts, minusProductObj } = cartSlice.actions

export default cartSlice.reducer