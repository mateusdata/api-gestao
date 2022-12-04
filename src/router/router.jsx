import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Consultas from "../components/consultas/consultas";
import Faturamento from "../components/faturamento/faturamento";
import Resumo from "../components/remumo/resumo"

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<Resumo/>}/>
       <Route path="/consultas" element={<Consultas />}/>
       <Route path="/faturamento" element={<Faturamento/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
