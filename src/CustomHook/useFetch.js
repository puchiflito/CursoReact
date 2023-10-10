/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useState } from "react";

// recibo la url por parametro
export default function useFetch(url) {
  // creo un estado donde voy a almacenar los datos pedidos por una peticion HTTP
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    errors: null,
  });
  // lo destructuro para poder usar
  const { data, isLoading, errors } = state;
  //creo la peticion asincrona (si es asincrona va dentro de un useEffect)
  const getFetch = async () => {
    if (!url) return "No hay url";
    // si sale todo bien, se muestra lo pedido
    try {
      const response = await fetch(url);
      const data = await response.json();
      setState({
        data,
        isLoading: false,
        errors: null,
      });
      // si sale mal me muestra el error
    } catch (error) {
      setState({
        data: null,
        isLoading: false,
        errors: "El error: " + error,
      });
    }
  };
  // para ejecutar la peticion
  useEffect(
    () => {
      getFetch();
    },
    [url] //escucha el cambio de la url
  );
  // retorno un objeto, de los datos, el cargando y el error
  return {
    data,
    isLoading,
    errors,
  };
}
