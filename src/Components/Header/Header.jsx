import React from "react";
import logo from "../../logo.svg";

function Header(props) {
  return (
    <header data-test="headerComponent">
      <div className="wrapper">
        <div className="logo">
            <img
            data-test = "logoImg" 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn3w2NRWhoBHw80iX_veSykwzzCNvC5HWuqnvfONvCVjh4IsW_Og&s" alt=""/>
            </div>
      </div>
    
    </header>
  );
}

export default Header;
