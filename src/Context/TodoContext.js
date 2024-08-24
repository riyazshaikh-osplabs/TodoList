import { createContext, useReducer } from "react";
import { todoReducer } from "../Store/Reducer/TodoReducer";
import { initialState as todoReducerInitialState } from "../Store/Reducer/TodoReducer";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, todoReducerInitialState);
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
