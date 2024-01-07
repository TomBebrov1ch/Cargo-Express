import { useState } from "react";
import logo from "../../assets/CARGO_LOGO 4.svg";
import Hamburger from "hamburger-react";

import "../Header/header.scss";

const Header = (props) => {
  return (
    <header className="header">
      <nav className="header__items">
        <img src={logo} alt="logo" className="header__logo" />
        <Hamburger
          className="header__hamburger"
          color="#025A42"
          toggled={props.isOpen}
          toggle={props.toggleMenu}
        />
      </nav>
    </header>
  );
};

export default Header;
