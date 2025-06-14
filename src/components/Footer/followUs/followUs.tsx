import React from "react";
import './styleFollowUs.css';

import twiterLight from '../../../assets/image/twitterLight.svg';
import twiterDark from '../../../assets/image/twitterDarck.svg';
import facebookLight from '../../../assets/image/facebookLight.svg';
import facebookDark from '../../../assets/image/facebookDark.svg';
import insagram from '../../../assets/image/icons8-instagram.svg';
import pinterestLight from '../../../assets/image/pinterestLight.svg';
import googleLight from '../../../assets/image/googLight.svg';

interface followUsProps{
    theme:boolean;
}
const FollowUs:React.FC<followUsProps> = ({theme}) => {
    return(
        <div className="followUs">
            <h5>Follow Us</h5>
            <div className="followImage">
                <a href="https://x.com/twitter" target="_blank" rel="noopener noreferrer">
                    <img src = {!theme ? twiterLight : twiterDark} alt = "" id = "imgFooter"></img>
                </a>
                <a href="https://fr-fr.facebook.com/" target="_blank" rel="noopener noreferrer">
                    <img src = {!theme ? facebookLight : facebookDark} alt = "" id = "imgFooter"></img>
                </a>
                <a href="https://x.com/twitter" target="_blank" rel="noopener noreferrer">
                    <img src = {insagram} alt = "" id = "imgFooter"></img>
                </a>
                <a href="https://ru.pinterest.com/" target="_blank" rel="noopener noreferrer">
                    <img src = {pinterestLight} alt = "" id = "imgFooter"></img>
                </a>
                <a href="https://www.google.ru/" target="_blank" rel="noopener noreferrer">
                    <img src = {googleLight} alt = "" id = "imgFooter"></img>
                </a>
            </div>
        </div>
    );
};
export default FollowUs;