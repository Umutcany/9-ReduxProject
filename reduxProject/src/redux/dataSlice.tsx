import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface State {
  data: any[]; // You can replace 'any' with the actual type of your data
}

const initialState: State = {
  data: [],
  keyword: "",
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    createDataFunc: (state, action: PayloadAction<any>) => {
      state.data = [...state.data, action.payload];
    },
    sortingDataFunc: (state, action: PayloadAction<any>) => {
      state.data = [
        ...state.data.sort((a, b) =>
          action.payload == "asc"
            ? a.price - b.price
            : action.payload == "desc"
            ? b.price - a.price
            : null
        ),
      ];
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
    searchDataFunc: (state, action: PayloadAction<any>) => {
      state.keyword = action.payload;
    },
  },
});

export const {
  createDataFunc,
  deleteDataFunc,
  updateDataFunc,
  sortingDataFunc,
  searchDataFunc,
} = dataSlice.actions;
export default dataSlice.reducer;
