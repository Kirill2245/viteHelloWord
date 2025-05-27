import React from 'react';
import './styleNav.css'
interface NavProps{
    IamgeMore:string;
}
const NavMenu: React.FC<NavProps> = ({IamgeMore}) => {
    return (
        <nav className="btnMenu" id = "btnMenu">
            <button className="btnHome">Home</button>
            <button className="btnFeatures">Features</button>
            <button className="btnTestimonial">Testimonial</button>
            <button className="btnTeam">Team</button>
            <button className="btnMore">More</button>
            <img src = {IamgeMore} alt = "" id = "poligon"></img>
        </nav>
    );
    };
    export default NavMenu;