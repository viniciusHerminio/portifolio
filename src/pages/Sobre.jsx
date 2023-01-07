import React from "react";
import Header from "../components/Header";
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3, DiReact, DiJavascript1 } from 'react-icons/di';
import { SiJest, SiBootstrap, SiRedux  } from 'react-icons/si';

function Sobre() {
return(
  <div>
    <Header />
    <div>
      <h3>Informações Pessoais</h3>
      <p>Nome: Vinícius Hermínio</p>
      <p>Idade: 24 Anos</p>
      <p>Email: viniciusherminio1@outlook.com</p>
      <p>Nome: Vinícius Hermínio</p>
      <p>Habilidade: Front-End</p>
    </div>
    <div>
      <h1> Minhas Habilidades</h1>
      <AiFillHtml5 />
      <DiCss3 />
      <DiReact />
      <SiJest />
      <DiJavascript1 />
      <SiBootstrap />
      <SiRedux />

    </div>
  </div>
)
}

export default Sobre;
