import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TASK,
  EDIT_TODO,
  TOGGLE_TODO,
} from "../Actions/TodoAction";
import { v4 as uuidv4 } from "uuid";

export const initialState = {
  todos: [],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: uuidv4(),
            task: action.payload.task,
            completed: action.payload.completed,
            isEditing: action.payload.isEditing,
          },
        ],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, isEditing: !todo.isEditing }
            : todo
        ),
      };
    case EDIT_TASK:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, task: action.payload.task, isEditing: !todo.isEditing }
            : todo
        ),
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    default:
      return state;
  }
};
