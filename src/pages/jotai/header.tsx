import React from "react";
import { useAtom } from "jotai";
import { languageAtom, languagesAtom, selectedValueAtom } from "./atoms";

export const Header = () => {
  const [language, setLanguage] = useAtom(languageAtom);
  const [languages] = useAtom(languagesAtom);
  const [selectedValue] = useAtom(selectedValueAtom);

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
        <p>{selectedValue === "1" ? "Hola" : "Chao"} Francisco!</p>
      </div>
      <div>
        <select
          name=''
          id=''
          value={language}
          onChange={(e) => {
            setLanguage(e.target.value);
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
