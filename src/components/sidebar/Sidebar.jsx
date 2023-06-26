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
              'name': 'Vehículo en reparación',
              'link': '/reparacion'
         },
         {
              'name': 'Carrito de compras',
              'link': '/carrito'
         },
         {
              'name': 'Registrar usuario',
              'link': '/register'
         }
     ],
     'cliente': [
         {
              'name': 'Perfil',
              'link': '/profile'
         },
         {
              'name': 'Vehículo en reparación',
              'link': '/reparacion'
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
              'name': 'Vehículo en reparación',
              'link': '/reparacion'
         },
         {
              'name': 'Carrito de compras',
              'link': '/carrito'
         }
     ],
     'jefe-taller': [
         {
              'name': 'Perfil',
              'link': '/profile'
         },
         {
              'name': 'Vehículo en reparación',
              'link': '/reparacion'
         },
         {
              'name': 'Carrito de compras',
              'link': '/carrito'
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
          setRol(true);
      }
      console.log('userRole:', userRole);
  }, [userRole])

  return (
    <div style={{zIndex: 99}}>
      <div className={`side-menu ${isOpen ? 'open' : ''}`}>
        <div className='container-items'>
            {
                isRol &&
                (options_[userRole])?.map((item, index) => (
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
