import React, { useContext, useState } from "react";
import { useTestContext } from "./context/filters";
import { ActionTypes } from "./context/filters/types";

export const Filters = () => {
  const {
    dispatch,
    state: { selected },
  } = useTestContext();

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
          value={selected}
          onChange={(e) => {
            dispatch({
              type: ActionTypes.SET_SELECTED,
              payload: e.target.value,
            });
          }}
        >
          {options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
        <div>
          <input type='checkbox' id='check1' value='ola' />
          <label>Mostrar grande</label>
        </div>
      </div>

      <div>
        {selected === "1" ? (
          <p> Tengo que saludar</p>
        ) : (
          <p>Tengo que despedirme :c</p>
        )}
      </div>
    </>
  );
};
