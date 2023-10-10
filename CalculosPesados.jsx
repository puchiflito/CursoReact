/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useMemo } from "react";

export default function CalculosPesados() {
  const [show, setShow] = useState(true);
  const [listaDeNumeros, setListaNumeros] = useState([1, 2, 3, 4, 5, 4, 9]);

  const agregarNumeros = () => {
    setListaNumeros([
      ...listaDeNumeros,
      listaDeNumeros[listaDeNumeros.length - 1] + 1,
    ]);
  };

  const getCalculo = (listaDeNumeros) =>
    useMemo(() => {
      console.log("Calculando");
      return listaDeNumeros.reduce((a, b) => a * b);
    }, [listaDeNumeros]);
  return (
    <div>
      <h2>Calculos</h2>
      <p>{getCalculo(listaDeNumeros)}</p>
      <button onClick={() => setShow(!show)}>{show ? "Show" : "Hide"}</button>
      <button onClick={() => agregarNumeros()}>Agregar numero</button>
    </div>
  );
}
