import React, { useEffect, useState } from "react";
import { useLanguage } from "./context/language";
import { ActionTypes } from "./context/language/types";
import { useTestContext } from "./context/filters";

export const Header = () => {
  const {
    dispatch,
    state: { languages, language },
  } = useLanguage();

  const {
    state: { selected },
  } = useTestContext();

  const [saludo, setSaludo] = useState("");

  useEffect(() => {
    console.log("selected", selected);

    selected === "1" ? setSaludo("Hola") : setSaludo("Chao");
  }, [selected]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <img src='logo192.png' alt='logo' />
      <div>
        <p>{saludo} Francisco!</p>
      </div>
      <div>
        <select
          name=''
          id=''
          value={language}
          onChange={(e) => {
            dispatch({
              type: ActionTypes.SET_SELECTED_LANGUAGE,
              payload: e.target.value,
            });
          }}
        >
          {languages.map((option, idx) => (
            <option value={option} key={idx}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <nav>
        <span className='nav-item'>asd</span>
        <span className='nav-item'>asd</span>
        <span className='nav-item'>asd</span>
      </nav>
    </div>
  );
};
