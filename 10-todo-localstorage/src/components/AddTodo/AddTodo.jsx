import { useRef } from "react";
import useTodos from "../../contexts/todos";

function AddTodo() {
  const inputLabel = useRef();
  const { addTodo } = useTodos();
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = inputLabel?.current?.value;
    if (!value) return alert("Todo required!");
    addTodo({
      id: Date.now().toString(),
      label: value,
      completed: false,
    });
    inputLabel.current.value = "";
  };

  return (
    <form className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        ref={inputLabel}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0 cursor-pointer"
        onClick={handleSubmit}
      >
        Add
      </button>
    </form>
  );
}

export default AddTodo;
