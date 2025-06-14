import React from "react";
import './stylePricingCard.css';

import Button from "@common/Button/Button";

interface CardProps{
    arrInfo:string[],
    count:string,
    cardID:"One" | "Two" | "Three",
    headerCard:"PERSONAL" | "AGENCY" | "ENTERPRISE"
}
const PricingCard:React.FC<CardProps> = ({arrInfo,count,cardID,headerCard}) => {
    return(
        <div id ={`card${cardID}`} className = "card">
        <h3>{headerCard}</h3>
        <div>
            <p className="dolar">$</p>
            <p className="count">{count}</p>
            <p className="mo">/MO</p>
        </div>
        <ul className="custom-list" role = "tablist">
            <li>{arrInfo[0]}</li>
            <li>{arrInfo[1]}</li>
            <li>{arrInfo[2]}</li>
        </ul>
        <Button text="SignUp" styleType="SignUp"/>
    </div>
    );
};
export default PricingCard;