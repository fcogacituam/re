import React from "react";
import { Header } from "./header";
import { Filters } from "./filters";
import { Options } from "./options";
import { Provider } from "react-redux";
import { store } from "../../store/store";
export const Redux = () => {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <Filters />
        <Options />
      </div>
    </Provider>
  );
};
