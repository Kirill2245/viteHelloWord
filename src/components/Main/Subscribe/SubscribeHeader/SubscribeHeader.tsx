import React from "react";
import './styleSubscribe.css';
import logo from '../../../../assets/image/Group9.svg'

const SubscribeHeader:React.FC = () => {
    return(
        <div>
            <img src = {logo} alt = ""></img>
            <h2 id = "subscribeHeader">Never miss an update</h2>
            <p className="textGroup_1" id = "textGroup_1">Far far away, behind the word mountains, far from the countries 
                Vokalia and Consonantia, there live the blind texts.</p>
        </div>
    );
}
export default SubscribeHeader