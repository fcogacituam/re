import React, { useState } from "react";

export const Filters = () => {
  const [selectedValue, setSelectedValue] = useState("2");

  const options = [
    { value: 1, label: "hola" },
    { value: 2, label: "chao" },
  ];

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
