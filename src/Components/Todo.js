import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Card from "./Card";
import { TodoContext } from "../Context/TodoContext";
import {
  DELETE_TODO,
  EDIT_TODO,
  TOGGLE_TODO,
} from "../Store/Actions/TodoAction";
import { useStore } from "../Store";
export const Todo = ({ task }) => {
  // const { dispatch } = useContext(TodoContext);
  const dispatch = useStore(false)[1];

  return (
    <Card className="Todo">
      {/* <p
        className={task.completed ? "completed" : ""}
        onClick={() => toggleComplete(task.id)}
      >
        {task.task}
      </p> */}
      <p
        className={task.completed ? "completed" : ""}
        onClick={() => dispatch("TOGGLE_TODO", { payload: { id: task.id } })}
      >
        {task.task}
      </p>
      <Card>
        <FontAwesomeIcon
          style={{ margin: "5px" }}
          icon={faPenToSquare}
          // onClick={() => editTodo(task.id)}
          onClick={() => dispatch("EDIT_TODO", { payload: { id: task.id } })}
        />
        <FontAwesomeIcon
          style={{ margin: "5px" }}
          icon={faTrash}
          // onClick={() => deleteTodo(task.id)}
          onClick={() => dispatch("DELETE_TODO", { payload: { id: task.id } })}
        />
      </Card>
    </Card>
  );
};
