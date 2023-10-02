/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Contador({ valor }) {
  const [contador, setContador] = useState(valor);
  const handleClick = () => {
    setContador(contador + 1);
  };
  return (
    <div>
      Contador
      <p>{contador}</p>
      <button onClick={handleClick}>click</button>
    </div>
  );
}

//comnetario

/*comentario */
