import React from 'react';
import more from '../../../assets/image/polygon.svg'
import './styleNav.css'
const NavMenu: React.FC = () => {
    return (
        <nav className="btnMenu" id = "btnMenu">
            <button className="btnHome">Home</button>
            <button className="btnFeatures">Features</button>
            <button className="btnTestimonial">Testimonial</button>
            <button className="btnTeam">Team</button>
            <button className="btnMore">More</button>
            <img src = {more} alt = "" id = "poligon"></img>
        </nav>
    );
    };
    export default NavMenu;