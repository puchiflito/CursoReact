import { useState } from "react";
// recibo por parametro los input del formulario
function useFormHook(formInitial = {}) {
  //lo coloco en un estado
  const [form, setForm] = useState(formInitial);

  // esto camptura los cambios del input
  //en vez de poner event u otra cosa, destructuro y ocupo el target, para ser mas corto nada mas
  const onChange = ({ target }) => {
    // por medio del destructuring, capturo de la propiedad name de todos los input y obvio el valor
    const { name, value } = target;
    //actualizo el estado del formulario, agarrando todo lo anterior y a la propiedad name del input con su respectivo valor
    setForm({
      ...form,
      [name]: value,
    });
  };
  // retorno en un objeto el estado del formulario y el evento que captura los cambios del input
  return {
    form,
    onChange,
  };
}

export default useFormHook;
