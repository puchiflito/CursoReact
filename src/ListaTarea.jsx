/* eslint-disable no-fallthrough */
import useFormHook from "./CustomHook/useFormHook";
import { useReducer } from "react";
// estado inicial, siempore es un arreglo
const initialState = [
  {
    id: new Date().getDate(),
    tarea: "Explicar Redux",
    finalizada: true,
  },
];

// algo que se va a agregar al estado
const nuevaTarea = {
  id: 2,
  tarea: "Explicar useReducer",
  finalizada: false,
};

// la accion que va a agregar al estado
// const agregarTarea = {
//   type: "[TAREA] Agregar Tarea",
//   payload: nuevaTarea,
// };

//esta es la funcion que une todo, se le pasa el estado iniclal y la accion
const tareaReducer = (state = initialState, action) => {
  switch (action.payload) {
    case "[TAREA] Agregar Tarea":
      return [...state, action.payload];
    case "[TAREA] Editar Tarea":
      console.log("Editar Tarea");
    case "[TAREA] Eliminar Tarea":
      console.log("Eliminar Tarea");
    case "[TAREA] Borrar Tarea":
      console.log("Borrar Tarea");
    default:
      return state;
  }
};

// console.log(tareaReducer(initialState, agregarTarea));

export const ListaTarea = () => {
  const [state, dispatch] = useReducer(tareaReducer, initialState);
  const { tarea, form, onChange } = useFormHook({ tarea: "" });
  const agregar = (submit) => {
    submit.preventDefault();

    const tarea = {
      id: new Date().getTime(),
      tarea: form.tarea,
      finalizada: true,
    };
    console.log(form);
    const action = {
      type: "[TAREA] Agregar Tarea",
      payload: tarea,
    };
    dispatch(action);
  };

  const finaliarTarea = ({ id, finalizada }) => {
    console.log(id);
    console.log(finalizada);
  };
  return (
    <div>
      <form onSubmit={agregar}>
        <input
          type="text"
          name="tarea"
          placeholder="Ingrese una tarea"
          value={tarea}
          onChange={onChange}
        />
        <button type="submit">Submit</button>
      </form>

      <ul>
        {state.map((item) => {
          return (
            <li key={item.id}>
              <span>{item.tarea}</span>
              <input
                type="checkbox"
                value={item.finalizada}
                onChange={() => finaliarTarea(item)}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
