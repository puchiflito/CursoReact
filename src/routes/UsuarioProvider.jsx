/* eslint-disable react/prop-types */
import { useState } from "react";
import { UsuarioContext } from "./UserContext";

export const UsuarioProvider = ({ children }) => {
  const [usuario, setUsuario] = useState({});
  return (
    <UsuarioContext.Provider value={{ usuario, setUsuario }}>
      {children}
    </UsuarioContext.Provider>
  );
};
