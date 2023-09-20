import React from "react";
import { Header } from "./header";
import { Filters } from "./filters";
import { Options } from "./options";
import { FiltersProvider } from "./context/filters";
import { LanguageProvider } from "./context/language";

export const WithContext = () => {
  return (
    <LanguageProvider>
      <Header />
      <FiltersProvider>
        <div>
          <Filters />
          <Options />
        </div>
      </FiltersProvider>
    </LanguageProvider>
  );
};
