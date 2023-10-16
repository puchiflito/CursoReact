import useFormHook from "../CustomHook/useFormHook";
import { useContext } from "react";
import { UsuarioContext } from "./UserContext";

export default function Login() {
  const initislState = {
    nombre: "",
    tecnologia: "",
    email: "",
    redes: "",
  };
  const { form, onChange, nombre, tecnologia, email, redes } =
    useFormHook(initislState);
  const { setUsuario } = useContext(UsuarioContext);
  const onSubmit = (event) => {
    event.preventDefault();
    setUsuario(form);
  };

  return (
    <div>
      Login
      <form className="container" onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            name="nombre"
            aria-describedby="emailHelp"
            value={nombre}
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Tecnologias</label>
          <input
            type="text"
            className="form-control"
            name="tecnologia"
            aria-describedby="emailHelp"
            value={tecnologia}
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="text"
            className="form-control"
            name="email"
            aria-describedby="emailHelp"
            value={email}
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Redes</label>
          <input
            type="text"
            className="form-control"
            name="redes"
            aria-describedby="emailHelp"
            value={redes}
            onChange={onChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Registrar Usuario
        </button>
      </form>
    </div>
  );
}
