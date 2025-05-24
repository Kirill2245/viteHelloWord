import React from "react";
import './Subscribe.css'
import logo from '../../../assets/image/Group9.svg'
// import SubscribeHeader from "./SubscribeHeader/SubscribeHeader";
import InputSub from "./InputSub/InputSub";
const Subscribe:React.FC = () => {
    return(
        <section className="subscrible" id = "subscribe">
            <div className="group" id = "group">
                {/* <SubscribeHeader/> */}
                <img src = {logo} alt = ""></img>
                <h2 id = "subscribeHeader">Never miss an update</h2>
                <p className="textGroup_1" id = "textGroup_1">Far far away, behind the word mountains, far from the countries 
                    Vokalia and Consonantia, there live the blind texts.</p>
                <InputSub/>
                <aside>
                    <p className="textGroup_2" id = "textGroup_2">“Your email address is safe with us. We never share your 
                            email address.”</p>
                </aside>
            </div>
        </section>
    );
}
export default Subscribe