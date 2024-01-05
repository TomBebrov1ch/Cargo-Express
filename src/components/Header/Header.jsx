import { useState } from 'react'
import logo from '../../assets/CARGO_LOGO 4.svg'
import Hamburger from 'hamburger-react'

import './styles/header.scss'

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    function toggleMenu() {
        setIsOpen(!isOpen);
    }

    return (
        <header>
            <img
                src={logo}
                alt="logo"
                className={`logo ${isOpen ? 'visible' : 'hiden'}`} />
            <Hamburger
                className='hamburger'
                color='#025A42'
                toggled={props.isOpen}
                toggle={props.toggleMenu} />
        </header>
    )
}

export default Header