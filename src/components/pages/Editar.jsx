//import libraries
import React from "react";
import Header from "../header/Header";
import Navbar from "../menu/Navbar";
import Editar from '../editar_perfil/EditarP'
import { useNavigate } from "react-router-dom";

const Add = () => {

    const [isLogged, setIsLogged] = React.useState(false);
    const navigate = useNavigate();

    React.useEffect(() => {

     if (!window.localStorage.hasOwnProperty("logged")) {
            setIsLogged(false);
            navigate('/');
        } else {
         const logged = (JSON.parse(window.localStorage.getItem("logged")))?.data;
           
         if ( logged && logged.isAuth) {
            setIsLogged(true);
         }
            
      } 

    }, []);

    return (
        <>
           { isLogged &&
            <>
                <Header />
                <Navbar />
                <Editar />
            </>
           }
        </>
    );

};

export default Add;