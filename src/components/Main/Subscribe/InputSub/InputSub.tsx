import React from "react";
import './styleInput.css';


import Button from "../../../common/Button/Button";
const InputSub:React.FC = () => {
    return(
        <div className="boxInputSub">
            <input placeholder="Type your email" aria-required="true"></input>
            <Button text="Subscribe" styleType="Subscribe"/>
        </div>
    );
}
export default InputSub