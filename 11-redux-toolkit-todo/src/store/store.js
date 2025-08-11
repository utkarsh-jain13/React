// Import configureStore to create the Redux store
import { configureStore } from "@reduxjs/toolkit";

// Import the todo reducer from the todo slice
import todoReducer from "../features/todo/todoSlice";

// Create and export the Redux store
// The store holds the application's state and logic
export const store = configureStore({
  reducer: todoReducer,
});
