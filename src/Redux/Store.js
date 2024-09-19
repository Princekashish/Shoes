import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./Featuere/Cartslice";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("reduxState");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("reduxState", serializedState);
  } catch (err) {
    // Handle potential errors saving state to local storage
    console.error("Error saving state to local storage:", err);
  }
};

// Load initial state from local storage
const persistedState = loadState();

export const store = configureStore({
  reducer: {
    cart: CartReducer,
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState(store.getState());
});
