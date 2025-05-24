import React from 'react';
import logo from'../../assets/image/keiko-logo1.svg';
import rollMenu from '../../assets/image/Hamburger.svg'
import './styleHeader.css';

import NavMenu from './navMenu/navMenu';
import SwitchButton from '../common/SwitchButton/SwitchButton';
import Button from '../common/Button/Button';
const Header: React.FC = () => {
return (
    <header>
        <div className="headerMenu">
            <img src={logo} alt = "" className="logo"></img>
            <NavMenu/>
            <SwitchButton/>
            <Button text="Contact" styleType="Contact"/>
            <img src = {rollMenu} alt = "" className="rollMenu"></img>
        </div>
    </header>
);
};
export default Header;