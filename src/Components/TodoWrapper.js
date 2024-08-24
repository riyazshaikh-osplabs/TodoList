import React, { useContext, useState } from "react";
import { Todo } from "./Todo";
import { TodoForm } from "./TodoForm";
import { EditTodoForm } from "./EditTodoForm";
import Header from "./Header";
import Card from "./Card";
import { TodoContext } from "../Context/TodoContext";

export const TodoWrapper = () => {
  // const [todos, setTodos] = useState([]);
  const { state } = useContext(TodoContext);

  // const addTodo = (todo) => {
  //   setTodos((prevTodos) => [
  //     ...prevTodos,
  //     {
  //       id: uuidv4(),
  //       task: todo.task,
  //       completed: todo.completed,
  //       isEditing: todo.isEditing,
  //     },
  //   ]);
  // };

  // const editTodo = (todoId) => {
  //   setTodos((prevTodos) =>
  //     prevTodos.map((todo) =>
  //       todo.id === todoId ? { ...todo, isEditing: !todo.isEditing } : todo
  //     )
  //   );
  // };

  // const editTask = (todoId, task) => {
  //   setTodos((prevTodos) =>
  //     prevTodos.map((todo) =>
  //       todo.id === todoId
  //         ? { ...todo, task: task, isEditing: !todo.isEditing }
  //         : todo
  //     )
  //   );
  // };

  // const toggleComplete = (todoId) => {
  //   setTodos((prevTodos) =>
  //     prevTodos.map((todo) =>
  //       todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
  //     )
  //   );
  // };

  // const deleteTodo = (todoId) => {
  //   setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  // };

  console.log("state", state);

  return (
    <Card className="TodoWrapper">
      <Header />
      {/* <TodoForm addTodo={addTodo} /> */}
      <TodoForm />
      {/* display todos */}
      {state.todos.map((todo) =>
        // if editing then edit todo form can be seen
        todo.isEditing ? (
          // <EditTodoForm key={todo.id} task={todo} editTodo={editTask} />
          <EditTodoForm key={todo.id} task={todo} />
        ) : (
          // <Todo
          //   key={todo.id}
          //   task={todo}
          //   deleteTodo={deleteTodo}
          //   editTodo={editTodo}
          //   toggleComplete={toggleComplete}
          // />
          <Todo key={todo.id} task={todo} />
        )
      )}
    </Card>
  );
};
