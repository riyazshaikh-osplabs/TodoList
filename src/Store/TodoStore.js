import { initStore } from ".";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  todos: [],
};

const todoReducer = {
  ADD_TODO: (state, payload) => {
    return {
      ...state,
      todos: [
        ...state.todos,
        {
          id: uuidv4(),
          task: payload.payload.task,
          completed: payload.payload.completed,
          isEditing: payload.payload.isEditing,
        },
      ],
    };
  },
  DELETE_TODO: (state, payload) => {
    return {
      ...state,
      todos: state.todos.filter((todo) => todo.id !== payload.payload.id),
    };
  },
  EDIT_TODO: (state, payload) => {
    return {
      ...state,
      todos: state.todos.map((todo) =>
        todo.id === payload.payload.id
          ? { ...todo, isEditing: !todo.isEditing }
          : todo
      ),
    };
  },
  EDIT_TASK: (state, payload) => {
    return {
      ...state,
      todos: state.todos.map((todo) =>
        todo.id === payload.payload.id
          ? { ...todo, task: payload.payload.task, isEditing: !todo.isEditing }
          : todo
      ),
    };
  },
  TOGGLE_TODO: (state, payload) => {
    return {
      ...state,
      todos: state.todos.map((todo) =>
        todo.id === payload.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      ),
    };
  },
};

const configureStore = () => {
  initStore(initialState, todoReducer);
};

export default configureStore;
