import { useEffect, useState } from "react";

let globalState = {};
let listeners = [];
let actions = {};

export const useStore = (shouldMount = true) => {
  const setState = useState(globalState)[1];

  const dispatch = (actionIdentifier, payload) => {
    console.log("actionIdentifier", actionIdentifier, payload);

    if (!actions[actionIdentifier]) {
      console.error(`Action ${actionIdentifier} not found`);
      return;
    }

    const newState = actions[actionIdentifier](globalState, payload);
    globalState = { ...globalState, ...newState };

    for (const listener of listeners) {
      listener(globalState);
    }
  };

  useEffect(() => {
    if (shouldMount) listeners.push(setState);

    return () => {
      if (shouldMount) {
        listeners = listeners.filter((listener) => listener !== setState);
      }
    };
  }, [setState, shouldMount]);

  return [globalState, dispatch];
};

export const initStore = (initialState, userActions) => {
  if (initialState) globalState = { ...globalState, ...initialState };
  console.log("globalState", globalState);

  actions = { ...actions, ...userActions };
  console.log("actions", actions);
};
