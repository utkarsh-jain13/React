import { useEffect, useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo/AddTodo";
import { TodoProvider } from "./contexts/todos";
import TodoItem from "./components/TodoItem/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const todoList = localStorage.getItem("todos");
    if (todoList) {
      const parsedTodoList = JSON.parse(todoList);
      setTodos(parsedTodoList);
    }
  }, []);

  useEffect(() => {
    if (todos?.length) {
      localStorage.setItem("todos", JSON.stringify(todos));
    } else {
      localStorage.removeItem("todos");
    }
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const updateTodo = (todo) => {
    const newTodos = todos.map((t) => {
      return todo.id === t.id ? { ...todo } : t;
    });
    setTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((t) => t.id !== id);
    setTodos(newTodos);
  };

  const markTodoAsComplete = (id) => {
    const newTodos = todos.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    setTodos(newTodos);
  };

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, markTodoAsComplete }}
    >
      <div className="bg-[#1b1f27] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <AddTodo />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <TodoItem todo={todo} key={todo.id} />
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
