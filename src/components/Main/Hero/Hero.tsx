import React from "react";
import hero from '../../../assets/image/hero.png'
import HeroInformation from "./HeroInformation/HeroInformation";
import './Hero.css'

const Hero:React.FC = () => {
    return(
        <div className="hero">
            <div className="boxHero">
                <picture>
                    <img src = {hero} alt = "hero" className="heroImg"></img>
                </picture>
                <HeroInformation/>
            </div>
        </div>
    );
};
export default Hero;