import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// Using a thunk to get the shop data
const fetchItemsByType = createAsyncThunk(
  "users/fetchItemsByTypeStatus",
  async (Itemtype, thunkAPI) => {
    const response = await axios.get(
      `https://my-basic-ecommerce-site.herokuapp.com/shop/${Itemtype}`
    );
    return response.data;
  }
);

export const slice = createSlice({
  name: "shop",
  initialState: {
    items: [],
  },
  reducers: {},
  extraReducers: {
    [fetchItemsByType.fulfilled]: (state, action) => {
      const items = action.payload;
      state.items = items;
    },
    [fetchItemsByType.rejected]: (state, action) => {
      return state;
    },
  },
});

export { fetchItemsByType };

export default slice.reducer;
