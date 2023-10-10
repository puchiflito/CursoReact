/* eslint-disable react/prop-types */
import { useState } from "react";

function AgregarTarea({ agregarTarea }) {
  const [inputValue, setInputValue] = useState("");
  const inputChange = (evento) => {
    setInputValue(evento.target.value);
    console.log(inputValue);
  };
  const onSubmit = (evento) => {
    evento.preventDefault();
    agregarTarea(inputValue);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="ingrese tarea nueva"
          value={inputValue}
          onChange={inputChange}
        />
      </form>
    </div>
  );
}

export default AgregarTarea;
