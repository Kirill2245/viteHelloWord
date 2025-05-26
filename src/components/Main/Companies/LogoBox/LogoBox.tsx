import React from "react";
import './styleLogoBox.css';

import logoAdode from '../../../../assets/image/Adobe_logo.svg';
import logoAmazon from '../../../../assets/image/Amazon_logo.svg';
import logoFacebook from '../../../../assets/image/Facebook_Logo.svg';
import logoGoogle from '../../../../assets/image/Google_logo.svg';
import logoIntel from '../../../../assets/image/intel.svg';
import logoSamsung from '../../../../assets/image/samsung.svg';

const LogoBox:React.FC = () =>{
    return(
        <figure className="imgGroup">
            <img src = {logoAdode} alt = "Логотип Adobe" className="igm1" id = "adobe"></img>
            <img src = {logoAmazon} alt = "Логотип Amazon" className="igm1" id = "amazon"></img>
            <img src = {logoFacebook} alt = "Логотип Facebook" className="igm1" id = "face"></img>
            <img src = {logoGoogle} alt = "Логотип Google" className="img2" id = "google"></img>
            <img src = {logoIntel} alt = "Логотип Intel" className="img3" id = "intel"></img>
            <img src = {logoSamsung} alt = "Логотип Samsung" className="igm3" id = "samsung"></img>
        </figure>
    );
};
export default LogoBox;