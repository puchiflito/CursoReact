import { useContext } from "react";
import { UsuarioContext } from "./UserContext";
export const Home = () => {
  // const { nombre, tecnologia, email, redes } =
  //   useContext(UsuarioContext).usuario;
  const { usuario } = useContext(UsuarioContext);
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">nombre</th>
            <th scope="col">tecnologia</th>
            <th scope="col">email</th>
            <th scope="col">redes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{usuario.nombre}</th>
            <td>{usuario.tecnologia}</td>
            <td>{usuario.email}</td>
            <td>{usuario.redes}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
