// StateProvider.js
import React, { createContext, useContext, useReducer } from "react";
// Correct import statement
import reducer, { initialState } from "./reducer";

// Rest of the code remains unchanged

export const StateContext = createContext();

export const StateProvider = ({ children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
