import { Routes, Route } from "react-router-dom";
import InicioDeSesion from "./pages/IniciarSesion";
import Inicio from "./pages/Inicio"
import Teams from "./pages/Teams"
function App() {
  return (
    <Routes>
      <Route path="/" element={<InicioDeSesion />} />
      <Route path="/Inicio" element={<Inicio />} />
      <Route path="/Teams" element={<Teams />} />
    </Routes>
  );
}

export default App;
