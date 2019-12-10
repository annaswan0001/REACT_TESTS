import React from "react";
import "./header.scss";
import {bg} from '../../assets/1.png'

function Header(props) {
  return (
    <header data-test="headerComponent">
      <div className="wrapper">
        <div className="logo">
          <h1
            data-test="logoImg"
          >LOGO</h1>
        </div>
      </div>
    </header>
  );
}

export default Header;
