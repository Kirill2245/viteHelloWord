import React from "react";
import './styleHeroInformation.css'
import Button from "@common/Button/Button";
const HeroInformation:React.FC = () => {
    return(
        <article className="textBox">
            <h1 id = "homeHeader">THE BEST TECH STARTUP</h1>
            <p>Even the all-powerful Pointing has no control
                about the bling texts it is an almost
                unorthographic life One day however a small 
                line of blind text by the name of Lorem
                lpsum decided to leave for the far World od 
                Grammar.</p>
            <Button text="Get Started" styleType="Started" />
        </article>
    );
};
export default HeroInformation;