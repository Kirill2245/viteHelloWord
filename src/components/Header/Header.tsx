import React from 'react';
import { useState, useEffect } from 'react';

import logo from'../../assets/image/keiko-logo1.svg';
import rollMenu from '../../assets/image/Hamburger.svg'
import './styleHeader.css';

import NavMenu from './navMenu/navMenu';
import SwitchButton from '../common/SwitchButton/SwitchButton';
import Button from '../common/Button/Button';

import poligon from '../../assets/image/polygon.svg';
import poligon1 from '../../assets/image/polygon1.svg';

interface HeaderProps {
    isDarkTheme: boolean; 
    onToggleTheme: () => void; 
}

const Header: React.FC<HeaderProps> = ({ isDarkTheme, onToggleTheme }) => {
    const logoMore = isDarkTheme ? poligon1 : poligon;
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
            if (!mobile) setShowMenu(false);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <header>
            <div className="headerMenu" id = {showMenu ? 'headerShowMenu':''}>
                {!showMenu && (<img src={logo} alt="" className="logo" />)}
                
                {!isMobile && <NavMenu IamgeMore={logoMore} />}
                
                {!showMenu && <SwitchButton isDarkTheme={isDarkTheme} onToggle={onToggleTheme} />}
                <Button text="Contact" styleType="Contact" />
                
                {isMobile && (
                    <>
                        {showMenu && (
                        <div className='navMenuMobile'>
                            <NavMenu IamgeMore={logoMore} />
                        </div>
                        )}
                    </>
                )}
                {isMobile && (
                    <img 
                        src={rollMenu} 
                        alt="Menu" 
                        className="rollMenu" 
                        onClick={toggleMenu}
                    />
                )}
            </div>
        </header>
    );
};

export default Header;