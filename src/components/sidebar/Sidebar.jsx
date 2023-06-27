import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './Sidebar.css';
import UserContext from "../../context/user/UserContext";

const options_ = {
     'gerente': [
         {
              'name': 'Perfil',
              'link': '/profile'
         },
         {
              'name': 'Gestion de Usuarios',
              'link': '/gestionUsuarios'
         },
         {
              'name': 'Inventario',
              'link': '/inventario'
         }

     ],
     'cliente': [
         {
              'name': 'Perfil',
              'link': '/profile'
         },
         {
              'name': 'Vehículo en reparación',
              'link': '/EstadoReparacion'
         },
         {
              'name': 'Carrito de compras',
              'link': '/carrito'
         }

     ],
     'vendedor': [
         {
              'name': 'Perfil',
              'link': '/profile'
         },
         {
              'name': 'Cotizaciones',
              'link': '/Cotizaciones'
         }
     ],
     'jefe-taller': [
         {
              'name': 'Perfil',
              'link': '/profile'
         },
         {
              'name': 'Ordenes de trabajo',
              'link': '/ordenes-trabajo'
         },
         {
              'name': 'Estado de ordenes',  
              'link': '/estado-orden?'     
         }
     ],
}

const Sidebar = ({
  open_,
  setIsLogged_
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRol, setRol] = useState(false);
  const { userRole , resetSession  } = React.useContext(UserContext);
  console.log('user:', React.useContext(UserContext));

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsLogged_(false);
  };

  const handleCloseSession = () => {
      //remove localstorage
      window.localStorage.removeItem('logged');
      //recargar la pagina
      window.location.reload();
  }

  React.useEffect(() => {

    if (open_) {
      console.log('open_:', open_);
      setIsOpen(true);
    }

  }, [open_])

  React.useEffect(() => {
      if (userRole !== '' || userRole !== null || userRole !== undefined) {
          setRol(JSON.parse(localStorage.getItem('logged')).data.tipoUsuario);
      }
      else {
          setRol(userRole);
      }
      console.log('userRole:', userRole);
  }, [userRole])

  return (
    <div style={{zIndex: 99}}>
      <div className={`side-menu ${isOpen ? 'open' : ''}`}>
        <div className='container-items'>
            {
                (options_[isRol])?.map((item, index) => (
                    <div key={index} className='boton-menu'><Link to={item.link}>{item.name}</Link></div>
                ))
            }
            <div className='boton-menu'><a onClick={handleCloseSession} >Cerrar sesión</a></div>
        </div>
      </div>
      {isOpen && <div className="backdrop" onClick={toggleMenu}></div>}
    </div>
  );
};

export default Sidebar;
