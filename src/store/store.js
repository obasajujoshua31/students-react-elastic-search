import React, { createContext, useReducer } from "react";
import reducer from "./miniReducer";

const initialState = {
  actors: [],
  isLoading: false,
};

export const context = createContext(initialState);

function Provider(props) {
  const [store, dispatch] = useReducer(reducer, initialState);

  return (
    <context.Provider
      value={{
        store,
        dispatch,
      }}
    >
      {props.children}
    </context.Provider>
  );
}
export default Provider;
