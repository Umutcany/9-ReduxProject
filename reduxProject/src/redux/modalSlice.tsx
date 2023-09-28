import { createSlice } from "@reduxjs/toolkit";

const initalState = {
  modal: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initalState,
  reducers: {
    modalFunc : {state} => {
      state.modal = !state.modal
    }
  },
});

export const {} = modalSlice.actions;
export default modalSlice.reducer;
