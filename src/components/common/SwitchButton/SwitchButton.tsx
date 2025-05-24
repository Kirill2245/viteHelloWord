import React from "react";
import './styleSwitch.css'
const SwitchButton: React.FC = () => {
    return(
        <label className="switch">
            <input type="checkbox" id="toggle"></input>
            <span className="slider"></span>
        </label>
    );
};
export default SwitchButton;