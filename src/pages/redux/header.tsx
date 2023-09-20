import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useDispatch } from "react-redux";
import { changeLanguage } from "../../store/languageSlice";

export const Header = () => {
  const { language, languages } = useSelector(
    (state: RootState) => state.language
  );
  const {
    filters: { selectedValue },
  } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <img src='logo192.png' alt='logo' />
      <h2>{selectedValue === "1" ? "Hola" : "Chao"} Francisco!</h2>
      <div>
        <select
          name=''
          id=''
          value={language}
          onChange={(e) => {
            dispatch(changeLanguage(e.target.value));
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
