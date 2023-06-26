//para el header
import React from "react";
import "./header.css";
import Button from "./Button";
import logo from "/assets/icon/logotipo.png";
import { 
    useNavigate 
} 
from "react-router-dom";

function Header() {

 const navigate = useNavigate();
 const [isLogged, setIsLogged] = React.useState(true);

  return (
    <div className="header">
      <div className="sb_header-links_div">
        {
          isLogged && 
          <div>
             <img src={logo} width="300" height="70" alt="logo" />
          </div>
        }
        <a style={{ cursor: 'pointer' }} onClick={ () => { navigate('/')}}>
             <img src={logo} width="300" height="70" alt="logo" />
        </a>
        <div className="_container_search">

        </div>
        <div className="btn-container">
          <Button />
        </div>
      </div>
    </div>
  );
}

export default Header;
