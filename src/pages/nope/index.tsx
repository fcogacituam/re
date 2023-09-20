import React, { ChangeEvent, useState } from "react";
import "./styles.css";
export const Nope = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectedValue, setSelectedValue] = useState("2");

  const options = [
    { value: 1, label: "hola" },
    { value: 2, label: "chao" },
  ];

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const Header = () => {
    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img src='logo192.png' alt='logo' />
          <nav>
            <span className='nav-item'>asd</span>
            <span className='nav-item'>asd</span>
            <span className='nav-item'>asd</span>
          </nav>
        </div>
      </>
    );
  };

  const Filters = () => {
    return (
      <>
        <h3>Filtros</h3>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <select
            name=''
            id=''
            value={selectedValue}
            onChange={(e) => setSelectedValue(e.target.value)}
          >
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>
        <div>
          {selectedValue === "1" ? (
            <p> Tengo que saludar</p>
          ) : (
            <p>Tengo que despedirme :c</p>
          )}
        </div>
      </>
    );
  };

  return (
    <div>
      <Header />
      <Filters />
    </div>
  );
};
