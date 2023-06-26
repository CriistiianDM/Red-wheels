import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './dropdown.css';

function Dropdown({ options }) {
  const [click, setClick] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => setClick(!click);

  const handleMouseLeave = () => {
    setClick(false);
  };

  const handleVerification = (option) => {

    if (option === 'Reparacion carros' || 
        option === 'Reparacion motos') {
      navigate('/no-login-repair');
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
            <li onClick={() => {handleVerification(option)}} key={index}>
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
    return '/vehicles';
  }else if (option === 'Reparacion carros') {
    return '/diagnostico-carros';
  }else if (option === 'Reparacion motos') {
    return '/diagnostico-motos';
  }else if (option === 'Unicentro') {
    return '/login';
  }else if (option === 'Llano grande') {
    return '/login';
  }else if (option === 'La flora') {
    return '/login';
  }
}
