import { useRef } from "react";
import useFormHook from "./CustomHook/useFormHook";

export default function FormularioConHooks() {
  const referenciaRef = useRef();
  console.log("este es el useRef: ", referenciaRef);
  // esto mando al customHook, para iniciarlo vacio, o tambien reutilizar en otro proyecto
  const formInitial = {
    user: "",
    email: "",
    password: "",
  };
  // customHook. Osea la logica esta fuera del componente
  const { form, onChange } = useFormHook(formInitial);
  //destructuring de lo que recibo de form
  const { user, email, password } = form;
  // esto envia los datos ingresados del form
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(form);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="user">User</label>
          <input type="text" name="user" value={user} onChange={onChange} />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            ref={referenciaRef}
            type="email"
            name="email"
            value={email}
            onChange={onChange}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
