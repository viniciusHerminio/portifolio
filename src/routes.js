import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Contatos from "./pages/Contatos";

import Home from "./pages/Home";
import Projetos from "./pages/Projetos";
import Sobre from "./pages/Sobre";

const Routess = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route element = { <Home /> } path="/" exact />
        <Route element = { <Projetos /> } path="/projetos" />
        <Route element = { <Sobre /> } path="/sobre" />
        <Route element = { <Contatos /> } path="/contatos" />
      </Routes>
    </BrowserRouter>
  )
}

export default Routess;
