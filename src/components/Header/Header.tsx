import React from 'react';
import logo from'../../assets/image/keiko-logo1.svg';
import rollMenu from '../../assets/image/Hamburger.svg'
import './styleHeader.css';

import NavMenu from './navMenu/navMenu';
import SwitchButton from '../common/SwitchButton/SwitchButton';
import Button from '../common/Button/Button';

import poligon from '../../assets/image/polygon.svg';
import poligon1 from '../../assets/image/polygon1.svg';
interface HeaderProps {
    isDarkTheme: boolean; // Пропс для состояния темы
    onToggleTheme: () => void; // Пропс для функции переключения темы
}

const Header: React.FC<HeaderProps> = ({ isDarkTheme, onToggleTheme }) => {
    const logoMore = isDarkTheme ? poligon1 : poligon;
    return (
        <header>
            <div className="headerMenu">
                <img src={logo} alt = "" className="logo"></img>
                <NavMenu IamgeMore = {logoMore}/>
                <SwitchButton isDarkTheme={isDarkTheme} onToggle={onToggleTheme} />
                <Button text="Contact" styleType="Contact"/>
                <img src = {rollMenu} alt = "" className="rollMenu"></img>
            </div>
        </header>
    );
};
export default Header;