import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface State {
  data: any[]; // You can replace 'any' with the actual type of your data
}

const initialState: State = {
  data: [],
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    createDataFunc: (state, action: PayloadAction<any>) => {
      state.data = [...state.data, action.payload];
    },
    deleteDataFunc: (state, action: PayloadAction<any>) => {
      state.data = [...state.data.filter((data) => data.id != action.payload)];
    },
    updateDataFunc: (state, action: PayloadAction<any>) => {
      state.data = [
        ...state.data.map((data) =>
          data.id == action.payload.id ? { ...data, ...action.payload } : data
        ),
      ];
    },
  },
});

export const { createDataFunc, deleteDataFunc, updateDataFunc } =
  dataSlice.actions;
export default dataSlice.reducer;
