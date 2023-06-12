import React, { useState, useEffect } from 'react';
import { MenuItems } from './NavItems';
import './dropdown.css';
import { Link } from 'react-router-dom';

function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const handleMouseLeave = () => {
    setClick(false);
  };

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
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  className={item.cName}
                  to={item.path}
                  onClick={() => setClick(false)}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Dropdown;
