import React from 'react'
import Hamburger from 'hamburger-react'
import { Link as ScrollLink } from "react-scroll";
import { Fade, Slide } from "react-awesome-reveal";

import '../Menu/menu.scss'

import logo from '../../assets/CARGO_LOGO 4.svg'

const Menu = () => {
    return (
        <Slide className="menu" direction='down'>
            <nav className='links'>
                <Fade direction='up'>
                    <img src={logo} alt="logo" className='logo' />
                </Fade>
                <ScrollLink className='item'>
                    <Fade direction='right' delay={200}>
                        Главная
                    </Fade>
                </ScrollLink>
                <ScrollLink className='item'>
                    <Fade direction='left' delay={300}>
                        О нас
                    </Fade>
                </ScrollLink>
                <ScrollLink className='item'>
                    <Fade direction='right' delay={400}>
                        Наши вагоны
                    </Fade>
                </ScrollLink>
                <ScrollLink className='item'>
                    <Fade direction='left' delay={500}>
                        Контакты
                    </Fade>
                </ScrollLink>
            </nav>
        </Slide>
    )
}

export default Menu