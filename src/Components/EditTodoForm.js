import { useContext, useEffect, useState } from "react";
import { TodoContext } from "../Context/TodoContext";
import { EDIT_TASK } from "../Store/Actions/TodoAction";

export const EditTodoForm = ({ task }) => {
  const { dispatch } = useContext(TodoContext);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // editTodo(task.id, input);
    dispatch({
      type: EDIT_TASK,
      payload: {
        id: task.id,
        task: input,
      },
    });
    setInput("");
  };

  useEffect(() => {
    if (task.isEditing) {
      setInput(task.task);
    }
  }, [task.isEditing]);

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="todo-input"
        placeholder="Update task"
      />
      <button type="submit" className="todo-btn">
        Edit Task
      </button>
    </form>
  );
};
