import { Routes, Route } from "react-router-dom";
import Login from "./page/Login";
import LoginResposive from "./page/Login resposive";

function App() {
  return (
    <Routes>
      <Route path="/" element={ <LoginResposive/> } />
    </Routes>
  );
}

export default App;


