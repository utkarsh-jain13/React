import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: "",
      label: "",
      completed: false,
    },
  ],
  addTodo: () => {},
  updateTodo: () => {},
  deleteTodo: () => {},
  markTodoAsComplete: () => {},
});

export const TodoProvider = TodoContext.Provider;

export default function useTodos() {
  return useContext(TodoContext);
}
