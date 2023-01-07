import React from "react";
import { Link } from "react-router-dom";

function Header() {
return(
  <div>
    <Link to="/"><h3>Home</h3></Link>
    <Link to="/sobre"><h3>Sobre</h3></Link>
    <Link to="/projetos"><h3>Projetos</h3></Link>
    <Link to="/contatos"><h3>Contatos</h3></Link>
  </div>
)
}

export default Header;
