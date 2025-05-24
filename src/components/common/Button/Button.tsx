import React from 'react';
import './styleButton.css'
interface ButtonProps {
    text: string; 
    styleType?: 'Contact' | 'Started' | 'Subscribe' | 'SignUp'; 
}
const Button: React.FC<ButtonProps> = ({ text, styleType}) => {

    const buttonClass = `button button-${styleType}`;
    return (
        <button className={buttonClass}>
        {text}
        </button>
    );
};
export default Button