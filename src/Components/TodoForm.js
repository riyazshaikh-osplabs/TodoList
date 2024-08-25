import { useContext, useState } from "react";
import { TodoContext } from "../Context/TodoContext";
import { ADD_TODO } from "../Store/Actions/TodoAction";
import { useStore } from "../Store";

export const TodoForm = () => {
  // const { dispatch } = useContext(TodoContext);
  const dispatch = useStore()[1];
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // addTodo({ task: input, completed: false, isEditing: false });
    dispatch("ADD_TODO", {
      payload: {
        task: input,
        completed: false,
        isEditing: false,
      },
    });
    // dispatch({
    //   ADD_TODO,
    //   payload: {
    //     task: input,
    //     completed: false,
    //     isEditing: false,
    //   },
    // });
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="todo-input"
        placeholder="What is the task today?"
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};
