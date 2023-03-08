import {BrowserRouter, Routes, Route } from "react-router-dom"
import ForgotPassword from "./page/ForgotPassword";
import GestCompte from "./page/GestCompte";
import GestProduct from "./page/GestProduct";
import HomePage from "./page/HomePage";
import Login from "./page/Login";
import Register from "./page/Register";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/home" element={<HomePage/>}/>
      <Route path="/Comptes" element={<GestCompte/>}/>
      <Route path="/Products" element={<GestProduct/>}/>

      <Route path="/register" element={<Register/>}/>
      <Route path="/forgotpassword" element={<ForgotPassword/>}/>
    </Routes>
    </BrowserRouter>

  );
}

export default App;
