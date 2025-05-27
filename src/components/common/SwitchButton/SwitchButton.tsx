import React from "react";
import './styleSwitch.css';
interface ThemeSwitchProps {
    isDarkTheme: boolean;
    onToggle: () => void;
}
const SwitchButton: React.FC<ThemeSwitchProps> = ({ isDarkTheme, onToggle }) => {
    return (
        <label className="switch">
            <input type="checkbox" id="toggle" checked={isDarkTheme} onChange={onToggle}/>
            <span className="slider"></span>
        </label>
    );
};
export default SwitchButton;