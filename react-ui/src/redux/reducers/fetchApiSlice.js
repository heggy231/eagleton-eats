import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {
  }
};

export const fetchApiSlice = createSlice({
  name: 'fetchApi',
  initialState,
  reducers: {
    getFoodData: (state, action) => {
      state.data = action.payload;
    },
  }
});

export const { getFoodData } = fetchApiSlice.actions;

export const foodData = (state) => state.fetchApi;

export default fetchApiSlice.reducer;