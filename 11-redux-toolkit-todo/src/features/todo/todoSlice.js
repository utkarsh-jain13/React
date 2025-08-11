// Import createSlice for creating a Redux slice and nanoid for unique IDs
import { createSlice, nanoid } from "@reduxjs/toolkit";

// Initial state with a sample todo item
const initialState = {
  todos: [
    {
      id: nanoid(), // Unique ID for the todo
      label: "Sample Todo", // The todo text
      completed: false, // Completion status
    },
  ],
};

// Create a Redux slice for todos
export const todoSlice = createSlice({
  name: "todo", // Name of the slice
  initialState, // Initial state
  reducers: {
    // Add a new todo to the list
    addTodo: (state, action) => {
      state.todos.push({
        id: nanoid(), // Generate a unique ID
        label: action.payload, // Set the label from the action payload
        completed: false, // New todos are not completed by default
      });
    },
    // Remove a todo by its ID
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    // Update the label of a todo by its ID
    updateTodo: (state, action) => {
      const { id, label } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.label = label;
      }
    },
  },
});

// Export actions for use in components
export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

// Export the reducer to be used in the Redux store
export default todoSlice.reducer;
