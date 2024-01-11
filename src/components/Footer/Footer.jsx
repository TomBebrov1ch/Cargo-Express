import React from "react";
import { Link } from "react-scroll";

import "../Footer/style.scss";

import logo from "../../assets/CARGO_LOGO 4.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <img src={logo} alt="logo" className="menu__logo" />
        <h1 className="footer__text">Главная</h1>
        <h1 className="footer__text">О нас</h1>
        <h1 className="footer__text">Наши вагоны</h1>
        <h1 className="footer__text">Контакты</h1>
        <Link smooth to="main">
          <button className="footer__btn">Вверх</button>
        </Link>
        <hr className="footer__separator" />
        <p className="footer__com">©Cargo Express PV 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
