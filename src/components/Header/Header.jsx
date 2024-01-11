import { useState } from "react";
import logo from "../../assets/CARGO_LOGO 4.svg";
import Hamburger from "hamburger-react";

import "../Header/header.scss";

const Header = (props) => {
  return (
    <>
      <section className="mob-screen">
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
      </section>
      <section className="pc-screen">
        <header className="header-pc">
          <nav className="header-pc__content">
            <img src={logo} alt="logo" className="header-pc__logo" />
            <div className="header-pc__content__text-s">
              <p className="header-pc__content__text">Главная</p>
              <p className="header-pc__content__text">О нас</p>
              <p className="header-pc__content__text">Наши вагоны</p>
              <p className="header-pc__content__text">Контакты</p>
            </div>
            <div className="header-pc__content__bnt">
              <button className="header-pc__content__button">Связаться с нами</button>
            </div>
          </nav>
        </header>
      </section>
    </>
  );
};

export default Header;
