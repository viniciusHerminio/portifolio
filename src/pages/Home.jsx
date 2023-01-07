import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import imageProfile from "../images/imageProfile.jpeg";

function Home() {
  const navigate = useNavigate();

return(
  <div>
    <Header />
    <img src={ imageProfile } alt="perfil" />
    <h1>Olá, sou Vinícius Hermínio</h1>
    <h2>Desenvolvedor Front-End</h2>
    <p>Ao longo da minha vida a tecnologia foi uma paixão que carreguei comigo e conheci a programação quando iniciei o Bacharelado em Ciências da Computação pela UFRPE, mas que por motivos familiares não consegui dar continuidade e acabei interrompendo meu sonho por um tempo! <br/>

Sempre gostei de desafios e um deles foi retornar ao mundo da programação pela Trybe e realizar o curso de desenvolvimento Web FullStack, o qual estou em 50% de andamento. Durante essa Jornada aprendi sobre HTML, CSS , JavaScript ES6 + , React Js , consumo de Api's e Testes utilizando Jest e suas bibliotecas!</p>
<button onClick={ () => navigate("/sobre") }>Sobre Mim</button>
  </div>
)
}

export default Home;
