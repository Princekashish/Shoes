import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    add: (state,action) => {
      state.push(action.payload);
    },
    remove: (state,actions) => {
      return state.filter((items)=>
        items.id !== actions.payload
      );
    },
    
  },
});

export const { add, remove } = counterSlice.actions;

export default counterSlice.reducer;