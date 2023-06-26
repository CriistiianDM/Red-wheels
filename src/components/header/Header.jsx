//para el header
import React from "react";
import "./header.css";
import Button from "./Button";
import logo from "/assets/icon/logotipo.png";
import herramienta from "/assets/icon/home.svg";
import Sidebar from '../sidebar/Sidebar';
import { 
    useNavigate 
} 
from "react-router-dom";

function Header() {

 const navigate = useNavigate();
 const [isLogged, setIsLogged] = React.useState(true);
 const [isLogged_, setIsLogged_] = React.useState(false);

  const handleClickOption = () => {
    //setIsLogged(!isLogged);
    console.log('isLogged_:', isLogged_);
    setIsLogged_(true);
  }

  React.useEffect(() => {
  
    if (!window.localStorage.hasOwnProperty("logged")) {
      setIsLogged(false);
    } else {
      const logged = (JSON.parse(window.localStorage.getItem("logged"))).data;

      if (logged.isAuth) {
        setIsLogged(true);
      }

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
          {
            isLogged_ &&
            <Sidebar open_={isLogged_} 
                    setIsLogged_={setIsLogged_} />
          }
          <a style={{ cursor: 'pointer' }} onClick={ () => { navigate('/')}}>
              <img src={logo} width="300" height="70" alt="logo" />
          </a>
        </div>
        <div className="_container_search">

        </div>
        <div onClick={() => {navigate('/login')}} className="btn-container">
              <div className="_img_circle">
                    <img src="/assets/icon/profile.svg" alt="circle" />
              </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
