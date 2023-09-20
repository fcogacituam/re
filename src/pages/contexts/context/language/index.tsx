import React, { createContext, useContext, useReducer } from "react";
import { ContextProps, Props, initialState } from "./types";
import appReducer from "./reducer";

const TestContext = createContext<ContextProps>({
  state: initialState,
  dispatch: () => void 0,
});

const LanguageProvider = ({ children }: Props): JSX.Element => {
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

const useLanguage = (): ContextProps => {
  const context = useContext(TestContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export { LanguageProvider, useLanguage };
