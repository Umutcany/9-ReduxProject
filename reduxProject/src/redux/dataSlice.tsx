import { createSlice } from "@reduxjs/toolkit";

const initalState = {
  data: [],
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
});

export const {} = dataSlice.actions;
export default dataSlice.reducer;
