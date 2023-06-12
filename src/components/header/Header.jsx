import React from "react";
import "./header.css";
import Button from "./Button";
import logo from "/assets/icon/logotipo.png";

function Header() {
  return (
    <div className="header">
      <div className="sb_header-links_div">
        <img src={logo} width="300" height="70" alt="logo" />
        <div className="btn-container">
          <Button />
        </div>
      </div>
    </div>
  );
}

export default Header;
