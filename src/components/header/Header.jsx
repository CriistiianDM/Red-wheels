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
import {useEffect, useState} from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Header() {

 const navigate = useNavigate();
 const [isLogged, setIsLogged] = React.useState(true);
 const [usuarios, setUsuarios]= useState([]);
 const [tablaUsuarios, setTablaUsuarios]= useState([]);
 const [busqueda, setBusqueda]= useState([]);

 const peticionGet=async()=>{
  await axios.get("")
  .then(response=>{
    setUsuarios(response.data);
    setTablaUsuarios(response.data);
  }).catch(error=>{
    console.log(error);
  })
 }

const handleChange=e=>{
  console.log("Búsqueda: "+e.target.value);
}

 useEffect(()=>{
  peticionGet();
 },[])

  const handleClickOption = () => {
    setIsLogged(!isLogged);
  }

  React.useEffect(() => {

    if (!window.sessionStorage.hasOwnProperty("logged")) {
      setIsLogged(false);
    } else {
      const logged = (JSON.parse(window.sessionStorage.getItem("logged"))).data;

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
          <a style={{ cursor: 'pointer' }} onClick={ () => { navigate('/')}}>
              <img src={logo} width="300" height="70" alt="logo" />
          </a>
        </div>
        <div className="_container_search">
        <div className="containerInput"  style={{display:"flex", position:"relative"}}>
        <input style={{paddingRight:"2em"}}
          className="form-control input buscar"
          value={busqueda}
          placeholder="Busqueda por componente o vehículo"
          onChange={handleChange}
        />
        <button className="btn btn-success" style={{position:"absolute", right:"0"}}>
          <FontAwesomeIcon icon={faSearch}/>
        </button>
      </div>
        </div>
        <div className="btn-container">
          <Button />
        </div>
      </div>
    </div>
  );
}

export default Header;
