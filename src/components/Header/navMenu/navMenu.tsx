import React from 'react';
import { Link} from 'react-scroll';
import './styleNav.css';
interface NavProps{
    IamgeMore:string;
}

const NavMenu: React.FC<NavProps> = ({IamgeMore}) => {
    return (
        <nav className="btnMenu" id = "btnMenu">
            <Link 
                to="home" 
                smooth={true} 
                duration={500} 
                className="btnHome"
                spy={true}
                activeClass="active"
            >
                Home
            </Link>
            <Link 
                to="features" 
                smooth={true} 
                duration={500} 
                className="btnFeatures"
                spy={true}
                activeClass="active"
            >
                Features
            </Link>
            <Link 
                to="testimonials" 
                smooth={true} 
                duration={500} 
                className="btnTestimonial"
                spy={true}
                activeClass="active"
            >
                Testimonial
            </Link>
            <button className="btnTeam">Team</button>
            <button className="btnMore">More</button>
            <img src = {IamgeMore} alt = "" id = "poligon"></img>
        </nav>
    );
    };
    export default NavMenu;