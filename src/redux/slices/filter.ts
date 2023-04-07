import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IFilterProps {
  category?: number;
  sort?: number;
}

const initialState = {
  categoryId: 0,
  sortId: 0,
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },
    setSortId(state, action: PayloadAction<number>) {
      state.sortId = action.payload;
    },
    setFilters(state, action: PayloadAction<IFilterProps>) {
      state.categoryId = Number(action.payload.category);
      state.sortId = Number(action.payload.sort);
    }
  },
})


export const { setCategoryId, setSortId, setFilters } = filterSlice.actions

export default filterSlice.reducer