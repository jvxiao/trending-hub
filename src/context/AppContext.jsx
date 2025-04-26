import { createContext, useContext, useReducer } from "react";

const AppContext = createContext({
  mode: 'entertainment'
});

export {
  AppContext
} 
  