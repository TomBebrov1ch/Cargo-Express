import { useState, useEffect } from 'react'
import Header from '../components/Header/Header.jsx'

import Menu from '../components/Menu/Menu.jsx';

const MainScreen = () => {
    const [isOpen, setIsOpen] = useState(false);
    function toggleMenu() {
        setIsOpen(!isOpen);
    }
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflowY = "hidden";
        } else {
            document.body.style.overflowY = "";
        }

        return () => {
            document.body.style.overflowY = "";
        };
    }, [isOpen]);
    return (
        <>
            <Header isOpen={isOpen} toggleMenu={toggleMenu} />
            {isOpen && <Menu isOpen={isOpen} toggleMenu={toggleMenu} />}
        </>
    )
}

export default MainScreen