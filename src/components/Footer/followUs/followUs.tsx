import React from "react";
import './styleFollowUs.css';

import followImage from '../../../assets/image/image1.jpg';
const FollowUs:React.FC = () => {
    return(
        <div className="followUs">
            <h5>Follow Us</h5>
            <img src = {followImage} alt = "" id = "imgFooter"></img>
        </div>
    );
};
export default FollowUs;