import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './Sidebar.css';
import sidebar from '/assets/icon/sidebar.svg';

const Sidebar = ({
  open_,
  setIsLogged_
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsLogged_(false);
  };

  React.useEffect(() => {

    if (open_) {
      console.log('open_:', open_);
      setIsOpen(true);
    }

  }, [open_])

  return (
    <div style={{zIndex: 99}}>
        {/* <img
        src={sidebar}
        alt=""
        className={`menu-toggle ${isOpen ? 'open' : ''}`}
        onClick={toggleMenu}
      /> */}
      <div className={`side-menu ${isOpen ? 'open' : ''}`}>
        <div className='container-items'>
            <div className='boton-menu'><Link to="/perfil">Perfil</Link></div>
            <div className='boton-menu'><Link to="/reparacion">Vehículo en reparación</Link></div>
            <div className='boton-menu'><Link to="/carrito">Carrito de compras</Link></div>
            <div className='boton-menu'><Link to="/cerrar">Cerrar sesión</Link></div>
        </div>
      </div>
      {isOpen && <div className="backdrop" onClick={toggleMenu}></div>}
    </div>
  );
};

export default Sidebar;
