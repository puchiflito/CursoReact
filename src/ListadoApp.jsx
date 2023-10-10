/* eslint-disable react/jsx-key */
import { useState } from "react";
import AgregarTarea from "./AgregarTarea";

/* eslint-disable react/prop-types */
const Items = ({ nombre, visto }) => {
  return (
    <li>
      {nombre}
      {visto ? "💹" : "❌"}
    </li>
  );
};

export default function ListadoApp() {
  // const addTask = () => {
  //   setArreglo([...arreglo, { nombre: "hola", visto: true }]);
  // };
  const lista = [
    { id: 0, nombre: "Instalaciones necesarias", visto: true },
    { id: 1, nombre: "Uso de vite", visto: false },
    { id: 2, nombre: "funciona", visto: true },
  ];

  const [arreglo, setArreglo] = useState(lista);
  const onAgregarTarea = (val) => {
    //que no tenga espacio ni al comienzo ni fin del input
    let valor = val.trim();
    if (!valor) {
      return alert("Campo vacio.");
    }
    const envio = {
      // esto hace que sea autoincremento, con una api se resuelve de otra manera
      id: arreglo.length,
      nombre: valor,
      visto: false,
    };
    setArreglo([...arreglo, envio]);
    console.log(val);
  };
  return (
    <div>
      <h2>Lista</h2>
      <ol>
        {arreglo.map((item) => (
          <Items key={item.id} nombre={item.nombre} visto={item.visto} />
        ))}
      </ol>
      <AgregarTarea agregarTarea={onAgregarTarea} />
      {/* <button onClick={() => addTask()}>Agregar</button> */}
    </div>
  );
}
