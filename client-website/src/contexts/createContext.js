import React, { createContext, useReducer, useMemo } from "react";

const createDataContext = (reducer, actions, initialState) => {
  const Context = createContext();

  function createActions(dispatch) {
    const boundActions = {};
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }
    return boundActions;
  }

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const contextValue = useMemo(() => {
      const boundActions = createActions(dispatch);
      return { state, ...boundActions };
    }, [state]);
    return <Context.Provider value={contextValue}>{children}</Context.Provider>;
  };
  return {
    Context,
    Provider,
  };
};

export default createDataContext;
