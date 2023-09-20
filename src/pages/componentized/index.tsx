import React from "react";
import { Header } from "./header";
import { Filters } from "./filters";
import { Options } from "./options";

export const Componentized = () => {
  return (
    <div>
      <Header />
      <Filters />
      <Options />
    </div>
  );
};
