import { Route, Routes } from "react-router-dom";
import "./App.css";
import { NavBar } from "./routes/NavBar";
import { About } from "./routes/About";
import { Contact } from "./routes/Contact";
import { Home } from "./routes/Home";
import { UsuarioProvider } from "./routes/UsuarioProvider";
import Login from "./routes/Login";

function App() {
  return (
    <UsuarioProvider>
      <h1>Aplicacion de enrutamiento</h1>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="" />
      </Routes>
    </UsuarioProvider>
  );
}

export default App;
