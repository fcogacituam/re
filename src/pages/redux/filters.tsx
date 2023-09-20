import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useDispatch } from "react-redux";
import { update } from "../../store/slice";

export const Filters = () => {
  const selectedValue = useSelector(
    (state: RootState) => state.filters.selectedValue
  );
  const dispatch = useDispatch();

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
          onChange={(e) => dispatch(update(e.target.value))}
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
