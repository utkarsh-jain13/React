import { useState } from "react";
import useTodos from "../../contexts/todos";

function TodoItem({ todo }) {
  const [todoMsg, setTodoMsg] = useState(todo.label);
  const [isTodoEditable, setIsTodoEditable] = useState(false);

  const { updateTodo, deleteTodo, markTodoAsComplete } = useTodos();

  const editTodo = () => {
    if (!todoMsg) return alert("Todo required!");
    updateTodo({
      ...todo,
      label: todoMsg,
    });
    setIsTodoEditable(false);
  };

  // Removed unnecessary handler wrappers

  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={() => markTodoAsComplete(todo.id)}
        aria-label={todo.completed ? "Mark as incomplete" : "Mark as complete"}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isTodoEditable ? "border-black/10 px-2" : "border-transparent"
        } ${todo.completed ? "line-through" : ""}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50 cursor-pointer"
        onClick={() => {
          if (todo.completed) return;
          if (isTodoEditable) {
            editTodo();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
        aria-label={isTodoEditable ? "Save todo" : "Edit todo"}
        title={isTodoEditable ? "Save todo" : "Edit todo"}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 cursor-pointer"
        onClick={() => deleteTodo(todo.id)}
        aria-label="Delete todo"
        title="Delete todo"
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;
