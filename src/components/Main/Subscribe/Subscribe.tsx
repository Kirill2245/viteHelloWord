import React from "react";
import './Subscribe.css'
import SubscribeHeader from "./SubscribeHeader/SubscribeHeader";
import InputSub from "./InputSub/InputSub";
const Subscribe:React.FC = () => {
    return(
        <section className="subscrible" id = "subscribe">
            <div className="group" id = "group">
                <SubscribeHeader/>
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