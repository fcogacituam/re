import React, { createContext, useContext, useReducer } from "react";
import { ContextProps, Props, initialState } from "./types";
import appReducer from "./reducer";

const TestContext = createContext<ContextProps>({
  state: initialState,
  dispatch: () => void 0,
});

const FiltersProvider = ({ children }: Props): JSX.Element => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <TestContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </TestContext.Provider>
  );
};

const useTestContext = (): ContextProps => {
  const context = useContext(TestContext);
  if (!context) {
    throw new Error("useTestContext must be used within a FiltersProvider");
  }
  return context;
};

export { FiltersProvider, useTestContext };
