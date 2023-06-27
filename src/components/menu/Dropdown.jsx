import React, { useState, useEffect ,  useContext } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import UserContext from "../../context/user/UserContext";
import './dropdown.css';

function Dropdown({ options , setSucursal }) {
  const [click, setClick] = useState(false);
  const navigate = useNavigate();
  const { setSucursalId } = useContext(UserContext);
  
  const menuSucursal = [
        'red-wheels-cosmocentro', 
        'red-wheels-pance', 
        'red-wheels-florida',
        'red-wheels-ciudad-jardin',
        'Sucursal-Pance',
 ]

  const handleMouseLeave = () => {
    setClick(false);
  };

  const handleVerification = (option,index) => {

    if (option === 'Reparacion carros' || 
        option === 'Reparacion motos') {

        if (!window.localStorage.hasOwnProperty("logged")) {
          navigate('/no-login-repair');
        }
     
    }

    if (menuSucursal.includes(option) ) {
      window.localStorage.setItem('surcursalId', index+1);
      setSucursalId(index+1);
      setSucursal(index+1)
    }

  }

  useEffect(() => {
    const dropdownMenu = document.querySelector('.dropdown-menu');
    
    dropdownMenu.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      dropdownMenu.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      <nav className="navbar">
        <ul className={click ? 'dropdown-menu active' : 'dropdown-menu'}>
          {options.map((option, index) => (
            <li onClick={() => {handleVerification(option, index)}} key={index}>
              <Link
                className="dropdown-link"
                to={getOptionLink(option)}
              >
                {option}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Dropdown;

function getOptionLink(option) {
  if (option === 'Carros') {
    return '/vehicles';
  } else if (option === 'Motos') {
    return '/Motos';
  }else if (option === 'Reparacion carros') {
    return '/diagnostico-carros';
  }else if (option === 'Reparacion motos') {
    return '/diagnostico-motos';
  }else if (option === 'Unicentro') {
    return 1;
  }else if (option === 'Llano grande') {
    return 2;
  }else if (option === 'La flora') {
    return 3;
  }
}
