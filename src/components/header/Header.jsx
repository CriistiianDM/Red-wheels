//para el header
import React from "react";
import "./header.css";
import Button from "./Button";
import logo from "/assets/icon/logotipo.png";
import herramienta from "/assets/icon/home.svg";
import { 
    useNavigate 
} 
from "react-router-dom";

function Header() {

 const navigate = useNavigate();
 const [isLogged, setIsLogged] = React.useState(true);

  const handleClickOption = () => {
    setIsLogged(!isLogged);
  }

  React.useEffect(() => {

    if (!window.sessionStorage.hasOwnProperty("logged")) {
      setIsLogged(false);
    } else {
      setIsLogged(true);
    } 

  }, []);

  return (
    <div className="header">
      <div className="sb_header-links_div">
        <div className="_conatiner_utils_logged">
          {
            isLogged && 
            <div onClick={handleClickOption}>
              <img src={herramienta} width="100" height="70" alt="logo" />
            </div>
          }
          <a style={{ cursor: 'pointer' }} onClick={ () => { navigate('/')}}>
              <img src={logo} width="300" height="70" alt="logo" />
          </a>
        </div>
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
