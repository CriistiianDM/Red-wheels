import React from "react";
import './header.css';
import logo from '../../assets/icon/logotipo.png';

function Header() {
    return (
        <div className="header">
                    <div className="sb_header-links_div">
                    <p><img src={logo} width="300" height="70"/></p>
                    </div>
                </div>
    );
}
export default Header;