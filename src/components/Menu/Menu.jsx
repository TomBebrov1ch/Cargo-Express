import React from "react";
import Hamburger from "hamburger-react";
import { Link as ScrollLink } from "react-scroll";
import { Fade, Slide } from "react-awesome-reveal";

import "../Menu/menu.scss";

import logo from "../../assets/CARGO_LOGO 4.svg";

const Menu = (props) => {
  return (
    <Slide className="menu" direction="down" triggerOnce>
      <nav className="menu__links">
        <div className="menu__hamburger">
          <Hamburger
            color="#F2F2F2"
            toggled={props.isOpen}
            toggle={props.toggleMenu}
          />
        </div>
        <img src={logo} alt="logo" className="menu__logo" />
        <ScrollLink className="menu__item">
          <Fade direction="right" delay={200}>
            Главная
          </Fade>
        </ScrollLink>
        <ScrollLink className="menu__item">
          <Fade direction="left" delay={300}>
            О нас
          </Fade>
        </ScrollLink>
        <ScrollLink className="menu__item">
          <Fade direction="right" delay={400}>
            Наши вагоны
          </Fade>
        </ScrollLink>
        <ScrollLink className="menu__item">
          <Fade direction="left" delay={500}>
            Контакты
          </Fade>
        </ScrollLink>
      </nav>
    </Slide>
  );
};

export default Menu;
